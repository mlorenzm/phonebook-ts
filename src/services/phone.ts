import axios from "axios";
import { PersonTypes } from "@/types";
const baseUrl = "/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject: PersonTypes) => {
  return axios.post(baseUrl, newObject);
};

const update = (id: number, newObject: PersonTypes) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteUser = (id: string) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  deleteUser: deleteUser,
};
