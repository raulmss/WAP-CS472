function LinkedList(){
    this.head = null;
    this.length = 0;
    this.print = function(){
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            console.log(current.value);
            current=current.next;
        }
    }
    this.add = function(node){
        if(this.length === 0){
            this.head = node;
            this.length++;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
            this.length++;
        }
    }
    this.remove = function(node){
        if(this.head.value === node){
            head = this.head.next;
            this.length--;
            return;
        }
        let previous = null;
        let current = this.head;
        for(let i = 0; i<this.length; i++){
            if(current.value === node){
                    previous.next = current.next;
                    this.length--;
                    
            }else{
                previous = current;
                current = current.next;
            }
        }
    }
}
function Node(value){
    this.value = value;
    this.next = null;
}

let list = new LinkedList();
list.add(new Node(1))
list.add(new Node(2))
list.add(new Node(3))
list.print();

list.remove(2);
list.print();

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    this.inputNewGrade = function(newGrade){
        this.grades.push(newGrade);
    }
    this.computeAvarege = function(){
        let sum = 0;
        for(let i = 0; i < this.grades.length;i++){
            sum+= this.grades[i];
        }
        return sum/this.grades.length;
    }
}

let stuA = new Student('Raul', 'Santos');
stuA.inputNewGrade(10)
stuA.inputNewGrade(9)
console.log(stuA.computeAvarege())
let stuB = new Student('Lorena', 'Souto');
stuB.inputNewGrade(9)
stuB.inputNewGrade(9)
console.log(stuB.computeAvarege())
