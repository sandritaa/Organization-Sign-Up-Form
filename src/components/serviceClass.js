export default class Service{
    _id = null;
    title = null;
    category = null;
    description = null;
    location = null;
    hours = null;

    constructor(){
        //give unique _id to service
    }

    getObj(){
        //return a copy of the full obj {}

        return Object.assign({}, this)
    }
}
