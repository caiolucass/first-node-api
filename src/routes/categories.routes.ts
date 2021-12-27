import {response, Router} from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

/*
* Cria uma categoria
*/
categoriesRoutes.post("/", (request, response) => {
  const {name, description} = request.body;
  
  categoriesRepository.create({name, description});
  return response.status(201).send();
});

/*
* Retorna uma categoria de categorias
*/
categoriesRoutes.get("/", (request, response) => {
    const listAll = categoriesRepository.list();
    return response.json(listAll);
});

export {categoriesRoutes};