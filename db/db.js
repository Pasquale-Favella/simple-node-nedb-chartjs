const Datastore = require('nedb')

const db = new Datastore('data.db');

db.loadDatabase();


console.log('db loaded')
data={
    user:'Paky',
    job:'Software dev',
    info:'Love Programming',
    infoGiorni:[
        {ore:7,data:new Date('02/08/2020')},
        {ore:12,data:new Date('03/08/2020')},
        {ore:9,data:new Date('04/08/2020')},
        {ore:9,data:new Date('05/08/2020')},
        {ore:10,data:new Date('06/08/2020')},
        {ore:9,data:new Date('07/08/2020')},
        {ore:14,data:new Date('08/08/2020')},
        {ore:8,data:new Date('10/08/2020')},
        {ore:9,data:new Date('11/08/2020')},
        {ore:12,data:new Date('12/08/2020')},
        {ore:8,data:new Date('14/08/2020')},
        {ore:13,data:new Date('15/08/2020')},
        {ore:7,data:new Date('16/08/2020')},

    ]
}
//db.insert(data)



module.exports = db;