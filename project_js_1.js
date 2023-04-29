
let Books =[
    [1,'Start with why','Simon Sinek',80.0,13],
    [2,'But how do it know','J. Clark Scott	',59.9,22],
    [3,'Clean Code','Robert Cecil Martin',50.0,5],
    [4,'Zero to One','Peter Thiel',45.0,12],
    [5,"You don't know JS",'Kyle Simpson',39.9,9]
];
function query(query){
    // let query = 1;

let exist =false;
for (let i=0;i<Books.length;i++){
    if(Books[i][0]==query){
        console.log('this book is existing '+Books[i][0]); exist =true;
    }else if(Books[i][1]==query){
         console.log('this book is existing '+Books[i][1]); exist =true;

    }else if (Books[i][2]==query){
         console.log('this book is existing '+Books[i][2]); exist =true;
    }
    
}
if(exist == false){
    console.log('this book is not existing '+query);
}

}
function sellandbill(Book_Title,Quantity,Stock){

    let error= false;
    for(let i=0; i<Books.length ; i++){
        if(Stock>=Books[i][3]&&Books[i][1]==Book_Title&&Quantity<=Books[i][4]){
            console.log('OK');
            Books[i][4]=Books[i][4]-Quantity;
            error=true
            break;

        }


    }
    if(error==false){
        console.log('the error');
    }


}
sellandbill('Zero to One',10,500);
sellandbill('Zero to One',10,500);
sellandbill('Zero to One',10,500);
query('Zero to One');
