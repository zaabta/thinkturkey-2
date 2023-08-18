class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
    toString() {
        return `${this.val}-> `;
    }
}

class LinkList {
    constructor(root) {
        if(root) {
            this.root = new Node(root);   
        }
        this.root = null
    }

    push(num) {
        if(!this.root){
            this.root = new Node(num);
            return
        } 
        const newNode = new Node(num);
        let temp = this.root
        while(temp.next ) {
            temp = temp.next
        }
        temp.next = newNode
    }

    pop() {
        let temp = this.root
        let counter = 0;
        while(counter < this.length() - 2) {
            temp = temp.next
            counter = counter + 1
        }
        const res = temp.next
        temp.next = null
        return res.val;
    }

    print() {
        let temp = this.root
        let str = "";
        while(temp) {
            str += temp.toString(str) 
            temp = temp.next
        }
        console.log(str);
    }

    find(val) {
        let index = 0;
        let temp = this.root
        while(temp !== null) {
            if(temp.val === val) return index
            temp = temp.next
            index = index + 1
        }
        return -1
    }

    indexOf(index) {
        if(index > 0 && index > this.length() - 1) return null
        let temp = this.root
        let currIndex = 0;
        while(temp) {
            if(index === currIndex) return temp.val
            temp = temp.next
            currIndex = currIndex + 1
        }
        return null
    }

    length() {
        let l = 0
        let temp = this.root
        while(temp) {
            l = l + 1
            temp = temp.next
        }
        return l;
    }

    sum() {
        let res = 0;
        let temp = this.root
        while(temp) {
            res = res + temp.val
            temp = temp.next
        }
        return res
    }
}

const list = new LinkList()
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.push(3);
list.print();
list.pop()
list.print();
console.log(list.length());
console.log(list.sum());
console.log(list.find(2));
console.log(list.find(1));
console.log(list.indexOf(4));