import { v4 as uuid } from 'uuid';

export const getTask = (req, res) => {
    return res.status(200).json([]);
}
export const postTask = (req, res) => {
    const { title, description } = req.body;
    if(!title || !description) return res.status(400).json({
        error: 'BAD REQUEST',
        message: 'faltaron datos'
    })
    const response = {
        title,
        description,
        id: uuid()
    }
    res.status(201).json(response);
}
export const patchTask = (req, res) => {

}
export const deleteTask = (req, res) => {

}