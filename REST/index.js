const express = require('express');
const app = express();
app.use(express.json());
var lab = [
 {device : 'F Airwayss', id : 'F1',state : 'Inflight'},
 {device : 'F Airwayss', id : 'F2',state : 'Landed'},
 {device : 'F Airwayss', id : 'F3',state : 'Landed'},
 {device : 'F Airwayss', id : 'F4',state : 'Inflight'},
 {device : 'F Airwayss', id : 'F5',state : 'Inflight'},
 {device : 'Line Airways', id : 'L1',state : 'Inflight'},
 {device : 'Line Airways', id : 'L2',state : 'Inflight'},
 {device : 'Line Airways', id : 'L3',state : 'Inflight'},
 {device : 'Line Airways', id : 'L4',state : 'Landed'},
 {device : 'Line Airways', id : 'L5',state : 'Landed'},
 {device : 'Indian airways', id : 'C1',state : 'Inflight'},
 {device : 'Indian airways', id : 'C2',state : 'Inflight'},
 {device : 'Indian airways', id : 'C3',state : 'Landed'},
]
app.get('/',(req,res)=>{
res.send('<center><h1 style = "color : blue;">Welcome to Smart Podium ! ! !</h1><br><br/><h2>You can control your appliances in a lab and see the status</center>');
});
app.get('/lab',(req,res)=>
{
res.send(lab);
});
app.head('/labdetails',(req,res)=>
{
res.send(lab);
});
app.get('/comp/:id',(req,res)=>
{
 const com = lab.find(x=>x.device === req.params.id);
 if(!result)
 {
 res.status(404).send('<h3>Sorry please check device ID, No device with the given ID');
 }
 res.send(com);
});
//Get the state of the device based on the ID.
app.get('/lab/:id',(req,res)=>
{
const result = lab.find(x => x.id === req.params.id); if(!result)
{
 res.status(404).send('<h3>Sorry please check device ID, No device with the given ID');
}
res.send(result.state);
});
//Adding a new device
app.post('/add',(req,res)=>
{
 var devi = req.body; lab.push(devi); res.send(lab);
});
app.post('/edit/:id',(req,res)=>{
 f = lab.find(x=>x.id === req.params.id);
 if(!f)
 {
 res.status(404).send('Sorry unable to find record');
 }
 //Updating state of the device
 f = req.body;
 res.send(f);
})
//Update the state based on the device id
app.put('/labu/:id',(req,res)=>
{
const f = lab.find(x=>x.id === req.params.id);
if(!f)
{
res.status(404).send('Sorry unable to find record');
}
//Updating state of the device
f.state = req.body.state; res.send(f);
});
app.patch('/update/:id',(req,res)=>{
 const f = lab.find(x=>x.id === req.params.id);
 if(!f)
 {
 res.status(404).send('Sorry unable to find record');
 }
 //Updating state of the device
 f.state = req.body.state; res.send(f);
})
//Deleting a device for the given id
app.delete('/del/:id',(req,res)=>
{
var p = req.params.id;
const result = lab.find(x => x.id === p);
if(!result)
{
 res.status(404).send('<h3>Sorry please check device ID, No device with the given ID');
}
const ind = lab.indexOf(result);
lab.splice(ind,1);
res.send(lab);
});
var server = app.listen(5001,function(){
{
var port = server.address().port;
console.log("Application server listening on the port number : ",port);
}});