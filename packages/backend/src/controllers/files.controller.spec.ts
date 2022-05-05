import {FilesController} from "./files.controller";
import { FilesService } from "../services/files.service";

describe('FilesController', () => {
    let filesService: FilesService;
    let filesController: FilesController;

    beforeEach(() => {
        filesService = new FilesService();
        filesController = new FilesController(filesService);
    });

    test('file list', async () => {
        const list = await filesController.list('');

        // expect(Array.isArray(list)).to(true);
        // expect(list.length > 0).toBe(true);
        // console.log(list);
    });

    // test('file download', async () => {
    //     const file = await filesController.file('test-file.txt');
    //
    //     expect(Array.isArray(list)).toBe(true);
    //     expect(list.length > 0).toBe(true);
    //     console.log(list);
    // });

});
