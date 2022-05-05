import {getEndpointUrl} from "../utils";
import axios from "axios";
import {PageModel} from "@app/backend/src/types/models/page.model";

const route = 'pages';

export function createPage(page: PageModel) {
    const url = `${getEndpointUrl(route)}/list`;

    return axios
        .post(url, { page })
        .then(response => response.data);
}
