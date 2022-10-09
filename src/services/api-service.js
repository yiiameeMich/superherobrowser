import React from "react";
import axios from "axios";

export default class GetApiData {

	apiBase = `https://www.superheroapi.com/api.php/338148107599656`;

	async getData(url) {
		try {
			const response = await axios.get(`${this.apiBase}${url}`)
			return response.data
		} catch (error) {
			console.log(error.message)
			return false
		}
	}

	getChar(id) {
		return this.getData(`/${id}`).then(res => {
			return res
		})
	}
}