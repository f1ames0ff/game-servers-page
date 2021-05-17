import { Injectable } from "@nestjs/common";
import fsPromises from "fs/promises";
import path from "path";
import { Response } from "express";

interface FileInfo {
    size: number;
}

export interface FileMap {
    [key: string]: FileMap | FileInfo
}

@Injectable()
export class FilesService {
    private PATH = path.join(__dirname, '../../public/files/');

    async fileList(folderName: string): Promise<FileMap> {
        const fullPath = path.join(this.PATH, `./${ folderName }`);
        let folderData: string[];
        let fileMap: FileMap = {};

        try {
            folderData = await fsPromises.readdir(fullPath);
        } catch (e) {
            return {};
        }

        const deepScan = async (files: string[], subFileMap: FileMap, fullPath: string) => {
            for await (let file of files) {
                const filePath = path.resolve(fullPath, file);
                const stats = await fsPromises.stat(filePath);

                if (stats?.isDirectory()) {
                    subFileMap[file] = {};
                    const dirData = await fsPromises.readdir(filePath);
                    await deepScan(dirData, subFileMap[file] as FileMap, filePath);
                } else {
                    const { size } = stats;
                    subFileMap[file] = { size };
                }
            }
        }

        return new Promise(async (resolve, reject) => {
            await deepScan(folderData, fileMap, fullPath);

            resolve(fileMap);
        });
    }

    download(fileName: string, response: Response) {
        const filePath = path.join(this.PATH, fileName);

        const arr = filePath.split('\\')
        const name = arr[arr.length - 1];

        response.download(filePath, name);
    }
}