import applyCaseMiddleware from 'axios-case-converter';
import axios from "axios";

const client = applyCaseMiddleware(axios.create());

export {client}