
class Matrix {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.matrix = []
    //    this.generateMatrix(x, y)
    }

    generateMatrix(x, y) {

        // let count = 1
        for (let i = 0; i < x; i++) {
            let row = []
            for (let j = 0; j < y; j++) {
              let r=  Math.random() * 4; 
               if(i==x-2 && j==y-1){
                row.push("*")
              }else{
                if(r>=2 && r<=4){row.push("*")}  
                if(r>=0 && r<=1)  {row.push(".")}
                if(r>1 && r<2)   {row.push("#")}
              }
             
          
              
             
            }
             
            this.matrix.push(row)
            this.matrix[0][1]="*"
           
         
          
            
        }
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    alter(r, c, v) {
        this.matrix[r][c] = v
    }
    printColumn(x) {
        let line = ""
        for (let i = 0; i < this.matrix.length; i++) {

            line += (this.matrix[i][x] + "\t")
        }
        console.log(line)

    }
    printRow(y) {
        let line = ""
        for (let j = 0; j < this.matrix[y].length; j++) {
            line += (this.matrix[y][j] + "\t")
        }
        console.log(line)
    }
    findCoordinate(x) {
        for (let i = 0; i < this.matrix.length; i++) {

            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == x) {
                    return {
                        y: j,
                        x: i
                    }
                }
            }


        }
    }
}
// -------------------------------------------------------------
class GoldRush extends Matrix {
    constructor(row, col) {
        super(row, col)
        this.row = row
        this.col = col
        this.playerScores = {
            1: 0,
            2: 0
        }
        super.generateMatrix(this.row,this.col)
        this.matrix[this.alter(0, 0, 1)]
        this.matrix[this.alter(this.row - 1, this.col - 1, 2)]

    }

    startGame(){
       super.generateMatrix(this.row,this.col)
        this.matrix[this.alter(0, 0, 1)]
        this.matrix[this.alter(this.row - 1, this.col - 1, 2)]
    }
    print() {
        super.print()
    }
    movement(player, str) {
       
        const point = super.findCoordinate(player)
        try {
           
          
            if (str == "right" && point.y + 1 <= this.col - 1 && !(super.get(point.x, point.y+1)==="#")) {
                let right = 1
               
                if(!Number.isInteger(( super.get(point.x, point.y+1) ))) {
                    if(( super.get(point.x, point.y+1)==="*" )) {this.playerScores[player]+=10}
                    console.log(this.playerScores[player])
                    this.matrix[this.alter(point.x, point.y + 1, player)]
                    this.matrix[this.alter(point.x, point.y, '.')]


                }else{
                    console.log("you cant move to another player point")
                }
               
                this.print()

            }
            if (str == "down"&& !(super.get(point.x+1, point.y)==="#")) {
                let down = 1
                if(!Number.isInteger(( super.get(point.x+1, point.y) ))) {
                    if(( super.get(point.x+1, point.y)==="*" )) {this.playerScores[player]+=10}
                this.matrix[this.alter(point.x + 1, point.y, player)]
                this.matrix[this.alter(point.x, point.y, '.')]
                }else{
                    console.log("you cant move to another player point")
                }
                this.print()
            }
            if (str == "up" && !(super.get(point.x-1, point.y)==="#" )) {
                let down = 1
                if(!Number.isInteger(( super.get(point.x-1, point.y) ))) {
                    if(( super.get(point.x-1, point.y)==="*" )) {this.playerScores[player]+=10}
                this.matrix[this.alter(point.x - 1, point.y, player)]
                this.matrix[this.alter(point.x, point.y, '.')]
            }else{
                console.log("you cant move to another player point")
            }
            this.print()
            }
            if (str == "left" &&point.y - 1 >= 0 && !(super.get(point.x, point.y-1)==="#") ) {
                let down = 1
                if(!Number.isInteger(( super.get(point.x, point.y-1) ))) {
                    if(( super.get(point.x, point.y-1)==="*" )) {this.playerScores[player]+=10}
                    console.log(this.playerScores[player])
                this.matrix[this.alter(point.x, point.y - 1, player)]
                this.matrix[this.alter(point.x, point.y, '.')]
            }else{
                console.log("you cant move to another player point")
            }
            
            this.print()
            }
            

        }
        catch (err) {
            console.log("cant not move out of limits")
        }
        if(this.playerScores[player]==110){alert(`good job ${player}`)}
    }
}
//let m = new GoldRush(5, 5)

/// m.movement(1,"right")
//  m.startGame()
//   m.movement(1,"down")
//   m.movement(1,"right")
//   m.movement(1,"right")
//   m.movement(1,"right")
//   m.movement(1,"right")
//   m.movement(2,"left")
//   m.movement(2,"left")
  
 

