const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Marsupilami = mongoose.model('marsupilami');

router.get('/', (req, res) => {
    res.render("addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

// router.post('/', (req, res) => {
//     if (req.body._id == '')
//         insertRecord(req, res);
//         else
//         updateRecord(req, res);
// });

// function insertRecord(req,res){
//     let mars = new Marsupilami({
//         age : req.body.age,
//         race : req.body.race,
//         nourriture : req.body.nourriture,
//         password : req.body.password,
//         famille : req.body.famille
    
//     });
//     console.log(req);
//     mars.save();
//     res.send(mars);
// }


router.post('/api/marsupilami',(req,res)=>{

    let mars = new Marsupilami({
        age : req.body.age,
        race : req.body.race,
        nourriture : req.body.nourriture,
        password : req.body.password,
        famille : req.body.famille
    
    });
    console.log(req);
    mars.save();
    res.send(mars);
    // async function add(){
    //     await mars.save();
    //     res.send(mars);
    // }
    // add();
    
});


// function insertRecord(req, res) {
//     var marsupilami = new Marsupilami();
    
//     marsupilami.age = req.body.age;
//     marsupilami.famille = req.body.famille;
//     marsupilami.race = req.body.race;
//     marsupilami.nourriture = req.body.nourriture;
//     marsupilami.save((err, doc) => {
//         if (!err)
//             res.redirect('marsupilami/list');
//         else {
//             if (err.name == 'ValidationError') {
//                 handleValidationError(err, req.body);
//                 res.render("marsupilami/addOrEdit", {
//                     viewTitle: "Insert marsupilami",
//                     marsupilami: req.body
//                 });
//             }
//             else
//                 console.log('Error during record insertion : ' + err);
//         }
//     });
// }

router.post('/update',updateRecord);

function updateRecord(req, res) {
    Marsupilami.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.send('error1');
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Marsupilami.find((err, docs) => {
        if (!err) {
            res.render("list", {
                viewTitle: "list",
                list : docs
            });
        }
        else {
            console.log('Error in retrieving marsupilami list :' + err);
        }
    });
});



router.get('/:id', (req, res) => {
    Marsupilami.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addOrEdit", {
                viewTitle: "Update marsupilami",
                marsupilami : doc
            });
        }
    });
});

router.delete('/delete/:id', (req, res) => {
    Marsupilami.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else { console.log('Error in marsupilami delete :' + err); }
    });
});

module.exports = router;