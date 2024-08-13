
const mongoose = require('mongoose')


let Schamabooks = mongoose.Schema({
    title : String,
    author : String,
    price : Number,
    image : String
})

let Books = mongoose.model('Book',Schamabooks)



const url = 'mongodb://localhost:27017/library'


/// to get three books

exports.getthreebooks = ()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return Books.find().limit(3)
        }).then((data)=>{
        
            mongoose.disconnect()
            resolve(data)
          
        }).catch((err)=>{
            reject(err)
        })
    })
}


// to get all the books

exports.getallbooks = ()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Books.find()
        }).then((alldocs)=>{
            mongoose.disconnect()
            resolve(alldocs)
        }).catch((err)=>{
            reject(err)
        })
    })
}

/// get book details 

exports.getbookdetails = (id)=>{
    return new Promise ((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return Books.findById(id)
        }).then((book)=>{
             mongoose.disconnect()
             resolve(book)
        }).catch((err)=>{
            reject(err)
        })
    })
}



























// exports.getallbooks = ()=>{
//     return new Promise ((resolve,rejects)=>{
//         mongoose.connect(url).then(()=>{
//             return Books.find()
//         }).then((docs)=>{
//             mongoose.disconnect()
//             resolve(docs)

//         }).catch((err)=>{
//           rejects(err)
//         })
//     })
// }


/// resolve ta3melha .then()
// reject ta3melha .catch()


// Exactement. L'utilisation de .then() dans une chaîne de promesses permet
//  d'exécuter des opérations de manière asynchrone et non bloquante. 
//  Cela signifie que les opérations peuvent être 
// exécutées de manière concurrente avec d'autres tâches, ce qui empêche le blocage du thread principal.





