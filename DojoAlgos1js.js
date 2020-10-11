// function evens(int){
//     // console.log("int",int)
//     if(int % 2 == 1){
//         int -=1
//     }
//     if(int > 0){
//         console.log(Math.pow(int,2));
//         var recurse = evens(int-2)
//     }
//     return 
// }
// function risingsquares(int){
//     if(int > 0 && int % 2 == 1){
//         var recurse = risingsquares(int-2)
//         console.log(Math.pow(int,2));
//     }
//     return int 
// }

// evens(risingsquares(5))

// function findquestion(string){
//     count = 0
//     for(let i = 0; i<=string.length;i++){
//         if(string[i]=="?"){
//             count++
//         }
//     }
//     return Math.pow(count,2)
// }
// console.log(findquestion("???"))

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



// function binarystringex(string,arr){
//     string2 = ""
//     if(arr.length == findquestion(string)){
//         return arr.length
//     }
//     for(let i = 0; i<string.length;i++){
//         if(string[i] == "?"){
//             string2 += getRandomInt(0,1)
//         }else{
//             string2+=string[i]
//         }
//     }
//     if(!contains(string2,arr)){
//         arr.push(string2)
//     }
//     return binarystringex(string,arr)
// }

// console.log(binarystringex("?????",[]))

// function generatecoinchange(cents){
//     var Q = Math.floor(cents/25)
//     cents = cents%25
//     var D = Math.floor(cents/10)
//     cents = cents%10
//     var N = Math.floor(cents/5)
//     cents = cents%5
//     var P = cents
//     return [Q,D,N,P]
// }
// console.log(generatecoinchange(112))

// function rcoinchange(cents,arr){
//     if(Math.floor(cents/25) >=1){
//         arr.push({"quarters":Math.floor(cents/25)})
//         return rcoinchange(cents%25,arr)
//     }
//     if(Math.floor(cents/10) >=1){
//         arr.push({"dimes":Math.floor(cents/10)})
//         return rcoinchange(cents%5,arr)
//     }
//     if(Math.floor(cents/5) >=1){
//         arr.push({"nickels":Math.floor(cents/5)})
//         return rcoinchange(cents%5,arr)
//     }
//     arr.push({"pennies":cents})
//     return arr
// }

// console.log(rcoinchange(57,[]))

// function Node(val){
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// function BinarySearchTree(){
//   this.root = null;
// }
 
// BinarySearchTree.prototype.add = function(val){
//     if(!this.root){
//         this.root = new Node(val)
//         return 
//     }
//     var runner = this.root
//     var newNode = new Node(val)
//     while(runner){
//         if(val < runner.val){
//             if(!runner.left){
//                 runner.left = newNode
//                 break;
//             }
//             runner = runner.left
//         }
//         else{
//             if(!runner.right){
//                 runner.right = newNode
//                 break;
//             }
//             runner = runner.right
//         }
//     }
//     return 
// }


// BinarySearchTree.prototype.add = function(val){
//     var newNode = new Node(val)
//     if(!this.root){
//         this.root = newNode
//         return
//     }
//     var runner = this.root
//     while(runner){
//         if(val < runner.val){
//             if(!runner.left){
//                 runner.left = newNode
//                 return
//             }
//             runner = runner.left
//         }
//         if(val > runner.val){
//             if(!runner.right){
//                 runner.right = newNode
//                 return
//             }
//             runner = runner.right
//         }
//     }
// }


// BinarySearchTree.prototype.contains = function(val){
//     if(!this.root){
//         return false
//     }
//     else{
//         if(this.root.val == val){
//             return this.root
//         }else{
//             var runner = this.root
//             while(runner){
//                 if(runner.val == val){
//                     return runner
//                 }else{
//                     if(val < runner.val){
//                         runner = runner.left
//                     }else{
//                         runner = runner.right
//                     }
//                 }
//             }
//             return false
//         }
//     }
// }

// var btree = new BinarySearchTree()

// btree.add(4)
// btree.add(6)
// btree.add(1)
// btree.add(2)
// btree.add(7)

// console.log(btree)

// function preorder(node){
//     if(!node){
//         return
//     }
//     console.log(node.val)
//     preorder(node.left)
//     preorder(node.right)
// }

// function postorder(node){
//     if(!node){
//         return
//     }
//     preorder(node.left)
//     preorder(node.right)
//     console.log(node.val)
// }

// function inorder(node){
//     if(!node){
//         return
//     }
//     inorder(node.left)
//     console.log(node.val)
//     inorder(node.right)
// }


// function rfib(b,a,num){
//     if(num == 0){
//         return a
//     }
//     return rfib(a,a+b,num-1)
// }
// console.log(rfib(1,0,5))

// function rsigma(num){
//     if(num == 1){
//         return 1
//     }
//     return num+rsigma(num-1)
// }



// BinarySearchTree.prototype.min = function(){
//     if(!this.root){
//         return false
//     }
//     else{
//         var runner = this.root
//         var min = runner.val
//         while(runner){
//             min = runner.val
//             runner = runner.left
//         }
//         return min  
//     }
// }


// BinarySearchTree.prototype.max = function(){
//     if(!this.root){
//         return false
//     }
//     else{
//         var runner = this.root
//         var max = runner.val
//         while(runner){
//             max = runner.val
//             runner = runner.right
//         }
//         return max 
//     }
// }

// BinarySearchTree.prototype.size = function(){
//     var count = 0
//     if(!this.root){
//         return count
//     }
//     else{
//         count++
//         var runner = this.root
//         while(runner.right){
//             count++
//             runner= runner.right
//         }
//         runner = this.root
//         while(runner.left){
//             count++
//             runner = runner.left
//         }
//         return count
//     }
// }


// BinarySearchTree.prototype.isEmpty = function(){
//     if(!this.root){
//         return true
//     }
//     return false
// }

// console.log(btree.isEmpty())

// function max(a,b){
//   if(a > b){
//     return a
//   }else{
//     return b
//   }
// }

// function min(a,b){
//   if(a > b){
//     return b
//   }else{
//     return a
//   }
// }


// function height(node){
//     if(!node){
//         return 0
//     }
//     var leftheight = height(node.left)
//     var rightheight = height(node.right)
//     return Math.max(leftheight,rightheight)+1
// }
// console.log(height(btree.root))




// function findheight(node){
//     if(!node.left && !node.right){
//         return 1
//     }
//     if(node.right){
//         var rightheight = findheight(node.right)
//     }
//     if(node.left){
//         var leftheight = findheight(node.left)
//     }else{
//         leftheight = 0
//     }
//     return 1+max(rightheight, leftheight)
// }


// function minheight(node){
//   if(!node.left && !node.right){
//     return 1
//   }
//   if(node.right){
//     var rightheight = minheight(node.right)
//     console.log("right height",rightheight)
//   }else{
//       rightheight = 0
//   }
//   if(node.left){
//     var leftheight = minheight(node.left)
//   }
//   return 1+min(rightheight,leftheight)
// }


// function isbalanced(node){
//   if(!node.left && !node.right){
//     return true
//   }
//   if(node.right){
//     var rightheight = findheight(node.right)
//     console.log("right", rightheight)
//   }
//   if(node.left){
//     var leftheight = findheight(node.left)
//     console.log("left", leftheight)
//   }
//   if(rightheight - leftheight == 1|| leftheight - rightheight == 1 || rightheight - leftheight == 0|| leftheight - rightheight == 0){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isbalanced(btree.root))

// function thistobst(arr){
//   var btree = new BinarySearchTree()
//   for(var i =0 ; i <arr.length;i++){
//     btree.add(arr[i])
//   }
//   return btree
// }

// console.log(isbalanced(arraytobst([1,2,3,4,5])))


// function bstPreOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     console.log(node.val)
//     bstPreOrder(node.left)
//     bstPreOrder(node.right)
//   }
// }

// console.log(bstPreOrder(btree.root))

// function bstPreOrderNoRecur(node){
//    if(!node){
//        return
//    }
//     var arr = []
//     arr.push(node)
//     while(arr.length > 0){ 
//         var thisnode = arr.pop()
//         console.log(thisnode.val)
//         if(thisnode.right){
//             arr.push(thisnode.right)
//         }
//         if(thisnode.left){
//             arr.push(thisnode.left)
//         }
//     }
//     return 
// }

// console.log(bstPreOrderNoRecur(btree.root))

// function bstPostOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstPostOrder(runner.left)
//     bstPostOrder(runner.right)
//   }
//    console.log(runner.val)
// }

// console.log(bstPostOrder(btree.root))

// function bstInOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstInOrder(runner.left)
//     console.log(runner.val)
//     bstInOrder(runner.right)
//   }
// }

// console.log(bstInOrder(btree.root))

// function bstInOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   bstInOrderArr(node.left, arr)
//   arr.push(node.val)
//   bstInOrderArr(node.right,arr)
//   return arr
// }

// function bstInOrderArrNode(node,arr){
//   if(!node){
//     return 
//   }
//   bstInOrderArrNode(node.left, arr)
//   arr.push(node)
//   bstInOrderArrNode(node.right,arr)
//   return arr
// }


// console.log(bstInOrderArr(btree.root,[]))

// function bstPreOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   arr.push(node.val)
//   bstPreOrderArr(node.left, arr) 
//   bstPreOrderArr(node.right,arr)
//   return arr
// }

// console.log(bstPreOrderArr(btree.root,[]))

// function bstPostOrderArr(node,arr){
//   if(!node){
//     return 
//   }
//   bstPostOrderArr(node.left, arr)
//   bstPostOrderArr(node.right,arr)
//   arr.push(node.val)
//   return arr
// }

// console.log(bstPostOrderArr(btree.root,[]))

// function bst2List(node,list){
//     if(!node){
//         return
//     }else{
//         bst2List(node.left, list)
//         list.addnode(node.val)
//         bst2List(node.right,list)
//         return list
//     }
// }

// var slist = new SinglyList()

// bst2List(btree.root, slist)
// console.log("slist",slist.head)

// btree.add(5)
// btree.add(2)
// btree.add(6)
// btree.add(3)
// btree.add(4)
// btree.add(8)
// btree.add(1)
// btree.add(7)

// BinarySearchTree.prototype.remove = function(val){
//   if(this.root.val == val){
//         if(!this.root.left && !this.root.right){
//           return this.root = null
//         }else{
//           if(this.root.left){
//           var runner = this.root.left
//           var parent = runner
//           if(runner.right){
//             while(runner.right){
//               parent = runner
//               runner = runner.right
//             }
//             this.root.val = runner.val
//             parent.right = null
//             return
//           }else{
//             this.root.val = runner.val
//             this.root.left = this.root.left.left
//           }
//         }else{
//           runner = this.root.right
//           if(runner.left){
//             while(runner.left){
//               parent = runner;
//               runner = runner.left
//             }
//             this.root.val= runner.val
//             parent.left = null
//             return
//           }else{
//             this.root.val = runner.val
//             this.root.right = this.root.right.right
//             return 
//           }
//         }
//       }
//     }
//     var runner = this.root
//     var parent = runner
//     var condition = false;
//     while(runner){
//         if(runner.val == val){
//             if(condition){
//               if(runner.left){
//                 runner.val = runner.left.val
//                 runner.left = null
//                 return 
//               }else{
//                 parent.right = parent.right.right
//                 return
//               }
//             }else{
//               if(runner.right){
//                 runner.val = runner.right.val
//                 runner.right = runner.right.right
//                 return
//               }else{
//                 parent.left = parent.left.left
//                 return
//               }
//             }
//         }else{
//             if(val < runner.val){ 
//                 parent = runner
//                 runner = runner.left
//                 condition = false;
//             }else{
//                 parent = runner
//                 runner = runner.right
//                 condition = true
//             }
//         }
//     }
// }

// BinarySearchTree.prototype.addwithoutdupes = function(val){
//     if(!this.root){
//         this.root = new Node(val)
//         return 
//     }
    
//      if(this.contains(val)){
//         return false
//     }

//     var runner = this.root
//     var newNode = new Node(val)

//     while(runner){
//         if(val < runner.val){
//             if(!runner.left){
//                 runner.left = newNode
//                 break;
//             }
//             runner = runner.left
//         }
//         else{
//             if(!runner.right){
//                 runner.right = newNode
//                 break;
//             }
//             runner = runner.right
//         }
//     }
//     return 
// }


// console.log(btree.addwithoutdupes(6))


// function bstReverseInOrder(node){ 
//   if(!node){
//     return 
//   }else{
//     var runner = node 
//     bstReverseInOrder(runner.right)
//     console.log(runner.val)
//     bstReverseInOrder(runner.left)
//   }
// }

// console.log(bstReversedInOrder(btree.root))

// function bstvalbefore(val,node){
//     var arr = bstInOrderArr(node,[])
//     var minrange = val - arr[0]
//     var nodeval = 0
//     for(var i = 0; i<arr.length;i++){
//         if(val - arr[i] <= minrange && val-arr[i]!==0 && val-arr[i] > 0){
//             minrange = val-arr[i]
//             nodeval = arr[i]
//         }
//     }
//     return nodeval
// }

// // console.log(bstvalbefore(510,btree.root))

// function bstvalafter(val,node){
//     var arr = bstInOrderArr(node,[])
//     var maxrange = arr[arr.length - 1] - val
//     var nodeval = null
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] - val <= maxrange && arr[i] - val!==0 && arr[i] - val > 0){
//             maxrange = arr[i] - val
//             nodeval = arr[i]
//         }
//     }
//     return nodeval
// }

// console.log(bstvalafter(,btree.root))

// function bstnodebefore(node1,node2){
//     var arr = bstInOrderArrNode(node2,[])
//     var minrange = node1.val - arr[0].val
//     var winnernode = null
//     for(var i = 0; i<arr.length;i++){
//         if(node1.val - arr[i].val <= minrange && node1.val-arr[i].val !== 0 && node1.val-arr[i].val > 0){
//             minrange = node1.val-arr[i].val
//             winnernode = arr[i]
//         }
//     }
//     return winnernode
// }

// console.log(bstnodebefore(btree.root.right,btree.root))


// function bstnodeafter(node1,node2){
//     var arr = bstInOrderArrNode(node2,[])
//     var maxrange = arr[arr.length - 1].val - node1.val
//     var winnernode = null
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i].val - node1.val <= maxrange && arr[i].val - node1.val!==0 && arr[i].val - node1.val > 0){
//             maxrange = arr[i].val - node1.val
//             winnernode = arr[i]
//         }
//     }
//     return winnernode
// }

// console.log(bstnodeafter(btree.root.left.right,btree.root))

// function closestvalue(val){
//     var afterval = bstvalafter(val,btree.root)
//     var beforeval = bstvalbefore(val,btree.root)
//     var arr = bstInOrderArr(btree.root, [])
//     console.log("after,before", afterval,beforeval)
//     var exactval = 0
//     for(var i = 0; i<arr.length ; i++ ){
//         if(arr[i] - val == 0){
//             exactval = arr[i]
//             return exactval
//         }
//     }
//     if(afterval - val < val - beforeval && afterval - val > 0){
//         return afterval
//     }else{
//         return beforeval
//     }
// }

// console.log(closestvalue(9))

// function bubblesort(arr){
//     var condition = true
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]){
//             var temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp;
//             condition = false
//         }
//     }
//     if(condition == false){
//         console.log(arr)
//         return bubblesort(arr)
//     }else{
//         return arr
//     }
// }

// console.log(bubblesort([5,3,1,6,7,2,8,4]))

// function selectionsort(arr){
//     for(var i = 0; i<arr.length;i++){
//         var min = arr[i]
//         for(var j = i; j<arr.length;j++){
//             if(arr[j] < min){
//                 min = arr[j]
//                 var temp = arr[i]
//                 arr[i] = min
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(selectionsort([8,5,2,6,9,3,1,4,0,7]))


// var newlist = new SinglyList()
// newlist.addnode(5)
// newlist.addnode(1)
// newlist.addnode(8)
// newlist.addnode(4)
// newlist.addnode(9)
// newlist.addnode(2)
// newlist.addnode(5)
// newlist.addnode(3)

// function slistbubblesort(list){
//     var condition = true
//     var runner = list.head
//     while(runner){
//         if(runner.next && runner.val > runner.next.val){
//             var temp = runner.val
//             runner.val = runner.next.val
//             runner.next.val = temp
//             condition = false
//         }
//         runner = runner.next
//     }
//     if(condition == false){
//         return slistbubblesort(list)
//     }else{
//         return list
//     }
// }

// console.log(slistbubblesort(newlist))

// function slistselectionsort(list){
//     var runner = list.head
//     while(runner){
//         var min = runner.val
//         var runner2 = runner
//         while(runner2){
//             if(runner2.val < min){
//                 min = runner2.val
//                 var temp = runner.val
//                 runner.val = min
//                 runner2.val = temp
//             }
//             runner2 = runner2.next
//         }
//         runner = runner.next
//     }
//     return list
// }

// slistselectionsort(newlist)

// Array.prototype.insert = function ( index, item ) {
//     this.splice( index, 0, item );
// };

// function insertionsort(arr){
//     for(var i = 0; i<arr.length;i++){
//         var min = arr[i]
//         for(var j = i; j<arr.length; j++){
//             if(arr[j] < min){
//                 min = arr[j]
//                 arr.splice(j,1)
//                 arr.insert(i,min)
//             }
//         }
//     }
//     return arr
// }

// console.log(insertionsort([6,5,3,1,8,7,2,4]))


// SinglyList.prototype.prependval = function(ListNode,before){
//     if(this.head == before){
//         var temp = this.head
//         this.head = ListNode
//         this.head.next = temp
//     }else{
//         var runner = this.head
//         var parent = runner
//         var count = 0
//         while(runner !== before){
//             parent = runner
//             runner = runner.next
//         }
//         var temp = runner
//         parent.next = ListNode
//         parent.next.next = temp
//         return ListNode
//     }
// }


// SinglyList.prototype.remove = function(val){
//     var current = this.head;
//     //case-1
//     if(current.value == val){
//        this.head = current.next;     
//     }
//     else{
//       var previous = current;
      
//       while(current.next){
//         //case-3
//         if(current.value == val){
//           previous.next = current.next;          
//           break;
//         }
//         previous = current;
//         current = current.next;
//       }
//       //case -2
//       if(current.value == val){
//         previous.next == null;
//       }
//     }
//   }  



// function slistinsertionsort(list){
//     var runner = list.head
//     var runner2;
//     var min;
//     var node;
//     var runner3;
//     while(runner){
//         min = runner.val
//         runner2 = runner
//         while(runner2){
//             if(runner2.val < min){
//                 min = runner2.val
//                 runner2 = list.remove(runner2.val)
//                 list.prependval(new ListNode(min), runner) 
//             }else{
//                 runner2 = runner2.next
//             }
//         }
//         runner = runner.next
//     }
//     return list
// }
// console.log(slistinsertionsort(newlist))

// function listtoarray(list){
//     var current = list.head
//     var arr = []
//     while(current){
//         arr.push(current.val)
//         current = current.next
//     }
//     return arr
// }

// function arraytolist(arr){
//     var list  = new SinglyList()
//     for(var i = 0; i< arr.length; i++){
//         list.addnode(arr[i])
//     }
//     return list
// }

// function slistinsertionsort(list){
//     var array = listtoarray(list)
//     array = insertionsort(array)
//     console.log(array)
//     list = arraytolist(array)
//     return list;
// }

// SinglyList.prototype.slistinsertionsort = function(){
//     var array = listtoarray(this)
//     array = insertionsort(array)
//       console.log(array)
//     var list = arraytolist(array)
//     this = list
// 
// newlist = slistinsertionsort(newlist)
// console.log(newlist.head.next)

// function combineArrs(arr1,arr2){
//     arr1 = arr1.concat(arr2)
//     arr1 = bubblesort(arr1)
//     return arr1
// }

// console.log(combineArrs([1,2,3], [4,5,6]))

// function combineLinkedList(list1,list2){
//     var runner = list1.head
//     while(runner.next){
//         runner = runner.next
//     }
//     runner.next = list2.head
//     list1 = slistbubblesort(list1)
//     return list1
// }

// console.log(combineLinkedList(newlist,newlist2))

// function slistmergesort(list){
//     var length = Math.floor(listlength(list.head,0)/2)
//     var right = new SinglyList()
//     var left = new SinglyList()
//     var count = length
//     var runner = list.head
//     while(count >= 0){
//         left.addnode(runner.val)
//         runner = runner.next
//         count--;
//     }
//     count = length * 2
//     runner = list.head
//     while(count >= 0){
//         if(count > length){
//             runner = runner.next
//         }else{
//             right.addnode(runner.val)
//             if(runner.next==null){right.addnode(runner.val);break}
//             runner = runner.next
//         }
//         count--;
//     }
//     var list = combineLinkedList(right,left)
//     return list
// }

// console.log(slistmergesort(newlist))

// function arraypartition(arr){
//     var val = arr[0]
//     var left = []
//     var right = []
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i] < val){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     var arr = left.concat(right)
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] == val){
//             val = i
//             break
//         }
//     }
//     return val
// }

// console.log(arraypartition([5,4,9,2,5,3]))

// function slistpartition(list){
//     var right = new SinglyList()
//     var left = new SinglyList()
//     var val = list.head.val
//     var runner = list.head
//     while(runner){
//         if(runner.val < val){left.addnode(runner.val)}
//         else{right.addnode(runner.val)}
//         runner = runner.next
//     }
//     var runner = left.head
//     while(runner.next){
//         runner = runner.next
//     }
//     runner.next = right.head
//     return left.head.next
// }

// console.log(slistpartition(newlist))


// function swap(arr, i, j){
//    var temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
// }
   
// function partition(arr, pivot, left, right){
//    var pivotValue = arr[pivot],
//        partitionIndex = left;

//    for(var i = left; i < right; i++){
//     if(arr[i] < pivotValue){
//       swap(arr, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(arr, right, partitionIndex);
//   return partitionIndex;
// }
        
// function quickSort(arr, left, right){
//    var len = arr.length, 
//    pivot,
//    partitionIndex;

//   if(left < right){
//     pivot = right;
//     partitionIndex = partition(arr, pivot, left, right);

//    quickSort(arr, left, partitionIndex - 1);
//    quickSort(arr, partitionIndex + 1, right);
//   }
  
//   return arr;
// }
   
// console.log(quickSort([5,4,9,2,5,3],0,6))

// function merge(left,right){
//     var llen = left.length,
//         rlen = right.length,
//         r = 0,
//         l = 0,
//         results = []
//     while(l <llen && r < rlen){
//         if(left[l] < right[r]){
//             results.push(left[l++])
//         }else{
//             results.push(right[r++])
//         }
//     }
//     return results.concat(left.slice(l).concat(right.slice(r)))
// }

// function mergeSort(arr){
//     var len = arr.length
//     if(len < 2){
//         return arr
//     }
//     var mid = Math.floor(len/2)
//     var left = arr.slice(0,mid)
//     var right = arr.slice(mid,len)
//     merge(mergeSort(left),mergeSort(right))
// }   

// console.log(mergeSort([1,2,3,4,5]))
// Set.prototype.union = function (arr){
//     var union = new Set(this)
//     for(elem in arr){
//         union.add(elem);
//     }
//     union.delete("union")
//     return union
// }

// function interleaveArrays(arr1,arr2){
//     var set1 = new Set(arr1)
//     var set2 = new Set(arr2)
//     var set3 = set1.union(set2)
//     var result = Array.from(set3)
//     console.log(result)
//     return 
// }



// interleaveArrays(arr1,arr2)

// function minthreearrayrange(arr1,arr2,arr3){
//     var set1 = new Set(arr1)
//     var set2 = new Set(arr2)
//     var set3 = new Set(arr3)
//     arr1= []
//     for(var item of set1){
//         if(set2.has(item+1)){
//             if(set3.has(item+2)){
//                 arr1.push(item)
//                 arr1.push(item+1)
//                 arr1.push(item+2)
//                 break
//             }
//         }
//         else if(set2.has(item-1)){
//             if(set3.has(item+1)){
//                 arr1.push(item-1)
//                 arr1.push(item)
//                 arr1.push(item+1)
//                 break
//             }
//             else if(set3.has(item-2)){
//                 arr1.push(item-2)
//                 arr1.push(item-1)
//                 arr1.push(item)
//             }
//         }
//         else if(set3.has(item - 1)){
//             if(set2.has(item -2)){
//                 arr1.push(item-2)
//                 arr1.push(item-1)
//                 arr1.push(item)
//                 break
//             }
//         }
//     }
//     return {min:arr1[0], max:arr1[arr1.length-1]}
// }

// arr1 = [1,3]
// arr2 = [1]
// arr3 = [2,45,22,11]

// console.log(minthreearrayrange(arr1,arr2,arr3));

// function intersectsortedarraysdedupe(arr1,arr2){
//     var set = new Set(arr1)
//     var set2 = new Set(arr2)
//     var arr = []

//     for(var item of set){
//         if(set2.has(item)){
//             arr.push(item)
//         }
//     }
//     return arr
// }
// var arr1 = [1,2,2,2,7]
// var arr2 = [2,2,6,6,7]
// console.log(intersectsortedarraysdedupe(arr1,arr2))

// function intersectsortedarrays(arr1,arr2){
//     var obj = {}
//     var arr = []
//     for(var i = 0; i<arr1.length ; i++){
//         if(!obj[arr1[i]]){
//             obj[arr1[i]] = [0,arr1[i]];
//         }
//     }
//     for(var i=0; i<arr2.length; i++){
//         for(key in obj){
//             if(key == arr2[i]){
//                 obj[key][0]++
//             }
//         }
//     }
//     for(key in obj){
//         if(obj[key][0] > 0){
//             while(obj[key][0] > 0){
//                 arr.push(obj[key][1])
//                 obj[key][0]--;
//             }
//         }
//     }
//     return arr
// }
// var arr1 = [1,2,2,2,7]
// var arr2 = [2,2,6,6,7]
// console.log(intersectsortedarrays(arr1,arr2))

// function MinHeap(){
//     this.heap = [];
//     this.heap[0]="heap"
// }

// MinHeap.prototype.IsEmpty = function(){
//     if(this.heap.length == 1){return true}
//     return false
// }

// MinHeap.prototype.Size = function(){
//     return this.heap.length
// }

// MinHeap.prototype.Top = function(){
//     return this.heap[0];
// }

// MinHeap.prototype.Contains = function(val){
//     for(var i = 0; i<this.heap.length;i++){
//         if(this.heap[i] == val){
//             return true
//         }
//     }
//     return false
// }

// MinHeap.prototype.Insert = function(val){
//     this.heap.push(val);
//     var parent = Math.floor((this.heap.length-1)/2)
//     var child = this.heap.length-1
//     var condition = true
//     while(condition){
//         if(val < this.heap[parent]){
//             var temp = this.heap[parent]
//             this.heap[parent] = val 
//             this.heap[child] = temp
//             child = parent
//             parent = Math.floor(parent/2)
//             condition = true;
//         }else{
//             break;
//         }
//     }
// }

// var heap = new MinHeap()
// heap.Insert(1)
// heap.Insert(15)
// heap.Insert(2)
// heap.Insert(16)
// heap.Insert(17)
// heap.Insert(4)
// heap.Insert(3)
// heap.Insert(0)

// MinHeap.prototype.extract = function(){
//     var count = this.heap.length
//     i = 1
//     while(i < count-1){
//         console.log(i)
//         var temp = this.heap[i]
//         this.heap[i] = this.heap[i+1]
//         this.heap[i+1] = temp;
//         i++;
//     }
//     this.heap.pop()
// }
// heap.extract()
// function arrayheapify(arr){
//     if(arr[0]!== "heap"){
//         arr.push("heap")
//         for(var i = arr.length-1; i>0; i--){
//             var temp = arr[i]
//             arr[i] = arr[i-1]
//             arr[i-1] = temp
//         }
//         console.log(arr)
//     }
//     var condition = true
//     var i = i;
//     while(condition){
//         if(arr[i] > arr[i*2] || arr[i] > arr[i*2+1]){
//             var temp = arr[i]
//             arr[i] =
//         }
//     }
//     return
// }
// var list  = new SinglyList()
// list.addnode(1)
// list.addnode(2)
// list.addnode(3)
function singlylistreverse(list){
    var initialnode = list.head
    var runner = this.head
    while(initialnode.next){
        var temp = initialnode.next
        initialnode.next = temp.next
        var head = list.head
        list.head = temp
        list.head.next = head
    }
    return list
}
// var newlist = singlylistreverse(list)
// console.log(newlist.head.next)
// function singlylistrotate(list,rotate){
//     if(rotate >= count){
//         return list 
//     }
//     var count = (listlength(list.head,0)) - rotate
//     var runner = list.head
//     var prev;
//     while(count > 0){
//         prev = runner
//         runner = runner.next
//         count--;
//     }
//     runner1 = runner
//     while(runner.next){
//         runner = runner.next
//     }
//     var temp = list.head
//     list.head = runner1
//     runner.next = temp
//     prev.next = null
//     return list
// }

// var newlist = singlylistrotate(list,2)
// console.log(newlist.head)
// function singlylistunshift(list,unshift){
//     if(unshift >= listlength(list.head,0)){
//         return list
//     }
//     var runner = list.head
//     while(runner.next){
//         runner = runner.next
//     }
//     while(unshift > 0){
//         var temp = list.head
//         list.head = list.head.next
//         temp.next = null
//         runner.next = temp
//         runner = runner.next
//         unshift--;
//     }
//     return list
// }
// var newlist = singlylistunshift(list,2)
// console.log(newlist)

// function shift(list,shift){
//     if(shift > listlength(list.head,0)){
//         return list
//     }
//     var count = (listlength(list.head,0)) - shift
//     console.log("count",count)
//     var runner = list.head; var prev;
//     while(count > 0){
//         prev = runner;
//         runner = runner.next
//         count--;
//     }
//     var temp1 = runner;
//     while(runner.next){
//         runner = runner.next
//     }
//     var temp2 = list.head
//     list.head = temp1
//     runner.next = temp2
//     prev.next = null
//     return list
// }
// var newlist = shift(list,2)
// console.log(newlist.head)
// function power(num,exp,product){
//     if(exp == 1){
//         return product
//     }
//     return power(num, exp-1, product*=num)
// }

// console.log(power(2,5,2))

// function arraymintofront(arr){
//     var min = arr[0]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] < min){
//             min = arr[i]
//             minidx = i
//         }
//     }
//     for(var i =minidx ; i<arr.length-1;i++){
//         var temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1]=temp
//     }
//     arr.pop()
//     for(var i = arr.length-1; i>=0; i--){
//         arr[i+1] = arr[i]
//     }
//     arr[0] = min
//     return arr
// }
// console.log(arraymintofront([4,2,1,3,5]))

// function isPalindrome(string){
//     var i = 0; var j= string.length-1;
//     while(i <= j){
//         if(string[i] === string[j]){
//             i++;
//             j--;
//         }else{
//             return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome("racecar"))


// SinglyList.prototype.reverse=function(){
//     var initialnode = this.head
//     var temp;
//     var head;
//     while(initialnode.next){
//         temp = initialnode.next;
//         initialnode.next = temp.next
//         head = this.head
//         this.head = temp
//         this.head.next = head
//     }
//     return this
// }

// var list = new SinglyList()
// for(var i = 1;i<6; i++){
//     list.addnode(i)
// }
// list.reverse()

// function swap(arr,idx1,idx2){
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp;
//     return
// }

// function selectionsort(arr){
//     for(var i=0;i<arr.length;i++){
//         var minidx = i
//         for(var j = i;j<arr.length;j++){
//             if(arr[j] < arr[minidx]){
//                 minidx = j
//             }
//         }
//         swap(arr,i,minidx)
//     }
//     return arr
// }


// console.log(selectionsort([4,3,1,2,5]))

// function bubblesort(arr){
//     for(var i = 0; i<arr.length;i++){
//         for(var j = 0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     return arr
// }
// console.log(bubblesort([4,3,1,2,5]))

// function copyifint(arr){
//     var arr2 = []
//     for(var i=0;i<arr.length;i++){
//         if(typeof(arr[i]) === "number"){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }

// function HashNode(key,val){
//     this.key = key
//     this.val = val;
//     this.next = null;
// }

// SinglyList.prototype.addhashnode = function(key,value){
//     var node = new HashNode(key,value),
//         currentNode = this.head;
//     if (!currentNode){
//         this.head = node;
//         return node;
//     }
//     while (currentNode.next){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = node;
//     return node;
// };

// SinglyList.prototype.removeKey = function(key){
//     if(this.head.key == key){
//         this.head = this.head.next;
//         return this.head
//     }else{
//         var runner = this.head
//         var parent;
//         while(runner.next && runner.key !== key){
//             parent = runner
//             runner = runner.next
//         }
//         if(!parent){
//             return null
//         }
//         parent.next = runner.next
//         return parent.next
//     }
// }



// function HashMap(capacity){
//     this.capacity = capacity;
//     this.table = [];
// }

// String.prototype.hashCode = function()
// {
//     var hash = 0;
//     if(this.length == 0) return hash;
//     for( var i = 0; i<this.length; i++){
//         char = this.charCodeAt(i);
//         hash = ((hash<<5)-hash)+char;
//         hash &= hash;
//     }
//     return hash
// }


// function mod(input,div){
//     return(input % div + div) % div
// }

// function arrRemove(arr,idx){
//     console.log(arr[idx])
//     for(var i= idx; i<arr.length;i++){
//         swap(arr,idx,idx+1)
//     }
//     return arr.pop()
// }

// HashMap.prototype.add = function(key,val){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(this.table[myIdx] == undefined){ 
//       this.table[myIdx] = new SinglyList()
//     }
//     return this.table[myIdx].addhashnode(key,val)
// }

// HashMap.prototype.findKey = function(key){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(this.table[myIdx]){
//         var runner = this.table[myIdx].head
//         while(runner.key !== key){
//             runner = runner.next
//         }
//         if(runner.key !== key){
//             return null
//         }
//         return runner
//     }
//     return null
// }

// HashMap.prototype.remove = function(key){
//     var myHashCode = key.hashCode()
//     var myIdx = mod(myHashCode,this.capacity)
//     if(!this.table[myIdx]){
//         return null;
//     }
//     this.table[myIdx]
//     return this.table[myIdx].removeKey(key)
// }

// HashMap.prototype.grow = function(){
//     var arr = []
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         runner = this.table[i].head
//         while(runner){
//             arr.push(runner)
//             runner = runner.next
//         }
//     }
//     this.table = []
//     this.capacity += Math.floor(this.capacity/2);
//     for(var i = 0;i<arr.length;i++){
//         this.add(arr[i].key,arr[i].val)
//     }
//     return 
// }

// function loadFactor(map){
//     if(map.table.length == Math.floor(map.capacity/2)){
//         map.capacity *= 2
//     }
// }

// HashMap.prototype.setSize = function(newCap){
//     var arr = []
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         runner = this.table[i].head
//         while(runner){
//             arr.push(runner)
//             runner = runner.next
//         }
//     }
//     this.table = []
//     this.capacity = newCap
//     for(var i = 0;i<arr.length;i++){
//         this.add(arr[i].key,arr[i].val)
//     }
// }

// HashMap.prototype.addMap = function(map){
//     for(var i = 0;i<map.table.length;i++){
//         if(map.table[i] == undefined){
//             continue;
//         }
//         runner= map.table.head
//         while(runner){
//             if(this.findKey(runner.key) !== null){
//                 this.findKey.val = runner.val
//             }else{this.add(runner.key,runner.val)}
//         }
//     }
// }

// HashMap.prototype.selectKeys = function(array){
//     for(var i = 0;i<this.table.length;i++){
//          if(this.table[i] == undefined){
//             continue;
//         }
//         var runner = this.table[i].head;
//         var prev = runner
//         while(runner){
//             bool = false
//             for(var j = 0;j<array.length;j++){
//                 if(array[j] == runner.key){
//                     bool = true 
//                 }
//             } 
//             if(!bool){
//                 console.log(runner.key)
//                 runner = this.table[i].removeKey(runner.key)
//             }else{
//                 prev = runner
//                 runner = runner.next
//             }
//         }
//     }
//     return this
// }

// var myMap = new HashMap(5)

// myMap.add('cat', 5);
// myMap.add('dog', 12);
// myMap.add('cool', 42);
// myMap.add('monkey', 100);
// myMap.add('tiger', 80);
// myMap.add('Lion', 10);

// var map = myMap.selectKeys(['cat','monkey'])

// console.log(map.table)

// var btree = new BinarySearchTree()

// btree.add(100)
// btree.add(150)
// btree.add(50)
// btree.add(42)
// btree.add(55)
// btree.add(140)
// btree.add(151)

// function isfull(node){
//     if(node){
//         if(!node.right && !node.left){
//             return true;
//         }
//         if(node.right && node.left){
//             return isfull(node.right) && isfull(node.left);
//         }
//     }
//     return false
// }

// console.log(isfull(btree.root))

// function countNodes(root){
//     if(!root){return 0}
    
//     return (1+ countNodes(root.left) + countNodes(root.right))
// }

// function isComplete(root,index,count_nodes){
//     if(!root){
//         return true
//     }
//     if(index >= count_nodes){
//         return false
//     }
//     return (isComplete(root.left, 2*index+1,count_nodes) && isComplete(root.right, 2*index+2,count_nodes))
// }

// var count = countNodes(btree.root)

// console.log(isComplete(btree.root,0, count))

// function stars(int){
//     var string = ""
//     while(int > 0){
//         string += "*"
//         int--;
//     }
    
//     return console.log(string)
// }

// function starsarr(arr){
//     for(var i = 0 ; i<arr.length ; i++){
//         if(typeof(arr[i])==="number"){
//             stars(arr[i])
//         }else if(typeof(arr[i])==="string"){
//             console.log(arr[i][0])
//         }
//     }
//     return arr
// }

// starsarr([4,"yo","k",4,5,8,19])

// function fib(){
//     var a = 0
//     var b = 1
//     var x;
//     function nacci(){
//         x = a;
//         a += b
//         b = x
//         console.log(a)
//     }
//     return nacci
// }
// var fibCounter = fib();
// fibCounter() 
// fibCounter() 
// fibCounter()
// fibCounter() 
// fibCounter() 
// fibCounter() 

// var list1  = new SinglyList()
// var list2 = new SinglyList()
// list1.add(2)
// list1.add(0)
// list1.add(1)
// list2.add(8)
// list2.add(4)

// function longestpalindrome(string){
//     var longest = ""
//     for(var i = 0;i<string.length;i++){
//         var j = string.length-1;
//         while(j > i){
//             if(string[i] === string[j]){
//                 if(isPalindrome(string.substring(i,j+1))){
//                     if(string.substring(i,j+1).length > longest){
//                         longest = string.substring(i,j+1);
//                         break;
//                     }
//                 } 
//             }
//             j--;
//         }
//     }
//     return longest
// }
// console.log(longestpalindrome("Yikes! mom favorite racecar erupted!"))
// function findQs(string){
//     var count = 0
//     for(var i = 0; i<string.length;i++){
//         if(string[i] === "?"){
//             count++;
//         }
//     }
//     return count
// }
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }


// function changeQs(string){
//     var string2 = ""
//     for(var i=0;i<string.length;i++){
//         if(string[i] === "?"){
//             string2 += getRandomInt(0,2)
//         }else{
//             string2+=string[i]
//         }
//     }
//     return string2
// }

// function binStrExpand(string,arr){
//     if(arr.length == Math.pow(findQs(string),2)){
//         console.log(arr)
//         return arr
//     }
//     condition = true
//     for(var i = 0; i<arr.length;i++){
//         if(arr[i] == changeQs(string)){
//             condition = false
//             break;
//         }else{
//             condition = true
//         }
//     }
//     if(condition){arr.push(changeQs(string))}
//     binStrExpand(string,arr)
// }

// console.log(binStrExpand("1?0?",[]))


// function censor(string,arr){
//     for(var i = 0;i<string.length;i++){
//         var j = string.length-1;
//         while(j > i){
//             if(string.substring(i,j+1) === arr[0] || string.substring(i,j+1) === arr[1]){
//                count =  string.substring(i,j+1).length
//                string2 = ""
//                while(count > 0){
//                     string2+="x"
//                     count--;
//                }
//                string = string.replace(string.substring(i,j+1),string2)
//             }
//             j--;      
//         }
//     }
//     return string
// }

// console.log(censor("Snap crackle pop nincompoop!", ["crack","poop"]))

// function bPoint(arr){
//     sum = 0;sum2=0;i=0; j=arr.length-1
//     while(i<arr.length-1 || j>0){
//         sum+= arr[i]
//         sum2+= arr[j]
//         i++;
//         j--;
//     }
//     console.log("sum1,sum2",sum,sum2)
//     if(sum == arr[arr.length-1] || sum2 == arr[0]){
//         return true
//     }
//     return false
// }

// console.log(bPoint([1,2,3,4,10]))

// function bIndex(arr){
//     if(arr.length <=2){
//         return -1
//     }
//     for(var i = 1;i < arr.length; i++){
//         sum = 0;sum2=0;j=0; k=arr.length-1
//         while(j < i || k > i){
//             if(j == i){
//                 sum2+= arr[k]; 
//                 k--;
//             }else if(k == i){
//                 sum+= arr[j];
//                 j++;
//             }else{
//                 sum+= arr[j];
//                 sum2+= arr[k]; 
//                 j++;
//                 k--;
//             }
//         }
//         if(sum == sum2){
//             return i;
//         }
//     }
//     return -1
// }

// console.log(bIndex([2,6,2,7,2,2,2,2,2]))

// var list1 = new SinglyList()
// var list2 = new SinglyList()
// for(var i=1;i<2;i++){
//     list1.addnode(i)
// }
// for(var i=4;i<7;i++){
//     list2.addnode(i)
// }

// function zip(list1,list2){
//     var newlist = new SinglyList()
//     var runner1 = list1.head
//     var runner2 = list2.head
//     while(runner1 || runner2){
//         if(runner1){
//             newlist.addnode(runner1.val)
//             runner1 = runner1.next
//         }
//         if(runner2){
//             newlist.addnode(runner2.val)
//             runner2 = runner2.next
//         }
        
//     }
//     return newlist
// }

// console.log(zip(list1,list2).head)

// function remove(index,string){
//     var string2 = ""
//     for(let i = 0;i<string.length;i++){
//         if(i == index){
//             continue;
//         }
//         string2+=string[i]
//     }
//     return string2
// }

// function stringswap(a,b,string){
//     var newstring = ""
//     for(let i = 0; i<string.length;i++){
//         if(i==a){
//             newstring += string[b]
//         }else if(i==b){
//             newstring += string[a]
//         }else{
//             newstring+=string[i]
//         }
//     }
//     return newstring
// }

// function contains(str,arr){
//     for(var i=0; i<arr.length;i++){
//         if(arr[i] === str){
//             return true
//         }
//     }
//     return false
// }

// function allperm(str,arr,i=0){
//     if(i==str.length){
//         console.log(arr,arr.length)
//         return 
//     }
//     arr.push(str)
//     tempstr = str
//     for(let i=0;i<str.length;i++){
//         for(let j = str.length - 1 ; j>i; j--){
//             if(!arr.includes(stringswap(i,j,str))){
//                 arr.push(stringswap(i,j,str))
//             }
//         }
//     }
//     str = tempstr
//     temp = str[0]
//     str = remove(0,str)
//     str+= temp
//     allperm(str,arr,i+=1)
// }
// console.log(allperm("team",[]))


// codeBreak = (str,obj,arr)=>{
//     bool = true
//     for(key in obj){
//         if(obj[key] == 0){

//         }
//     }
// }


// function insertionsort(arr){
//     for(let i = 0;i<arr.length;i++){
//         let key = arr[i],
//             j = i-1
//         while(j>=0 && key < arr[j]){
//             arr[j+1] = arr[j]
//             j--;
//         }
//     }
// }
// console.log(insertionsort([4,2,6,3,1]))

// list = new SinglyList()
// for(var i = 1;i<6;i++){
//     list.addnode(i)
// }

// function reverse(list){ 
//     let initialnode = list.head
//     while(initialnode.next){
//         head = list.head
//         temp = initialnode.next
//         initialnode.next = initialnode.next.next
//         list.head = temp
//         list.head.next = head
//     }
//     return list
// }


// class Ninja{
//     constructor(name){
//         this.name = name
//         this.health = 100
//         this.speed = 3
//         this.strength = 3
//     }
//     sayName(){
//         console.log("your name is " + this.name )
//     }
//     showStats(){
//         console.log("Your health " + this.health)
//         console.log("Your Strength " + this.strength)
//         console.log("Your speed " + this.speed)
//     }
//     drinkSake(){
//         this.health+=10
//         console.log("Your health increased by 10. Your health is now " +this.health)
//     }
// }

// class Sensei extends Ninja{
//     constructor(name){
//         super(name)
//         this.health = 200
//         this.strength = 10
//         this.speed = 10
//         this.wisdom = 10
//     }
//     speakWisdom(){
//         this.drinkSake()
//     }
// }

// let super_sensei = new Sensei("Master Splinter");
// super_sensei.speakWisdom();

// super_sensei.showStats();

// var _ = {
//     map: function(arr,callback){
//       for(var i = 0;i<arr.length;i++){
//           arr[i] = callback(arr[i])
//       }
//       return arr
//     },
//     reduce: function(arr,callback) { 
//       let sum = 0;
//       for(var i = 0;i<arr.length;i++){
//           sum = callback(sum,arr[i])
//       }
//       return sum
//     },
//     find: function(arr,callback) { 
//         for(var i =0;i<arr.length;i++){
//             if(callback(arr[i])){
//                 return arr[i]
//             }
//         }
//     },
//     filter: function(arr,callback) { 
//         let newarr = []
//         for(var i =0;i<arr.length;i++){
//             if(callback(arr[i])){
//                newarr.push(arr[i])
//             }
//         }
//         return newarr
//     },
//     reject: function(arr,callback){ 
//         let newarr = []
//         for(var i =0;i<arr.length;i++){
//             if(!callback(arr[i])){
//                newarr.push(arr[i])
//             }
//         }
//         return newarr
//     }
//   }

 
// console.log(_.reduce([1, 2, 3], function(sum, num){ return sum + num; }))

// pf = (arr,val)=>{
//     for(let i=arr.length;i>=0;i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = val
//     return
// }

// rotate = (arr,shift) => {
//     while(shift > 0){
//         pf(arr,arr.pop())
//         shift--;
//     }
//     console.log(arr)
//     return 
// }

// rotate([1,2,3,4,5],2)

// concat = (arr1,arr2)=>{
//     len1 = 0
//     len2 = 0
//     arr = []
//     while(len1 <= arr1.length-1 || len2 <= arr2.length-1){
//         if(len1 <= arr1.length-1){
//             arr.push(arr1[len1++])
//         }else{
//             arr.push(arr2[len2++])
//         }
//     }
//     return arr
// }

// Array.prototype.concat = function(arr){
//     if(arr != unde)
//         for(let i=0;i<arr.length;i++)
//             this.push(arr[i])
        
//     return
// }

// console.log(concat([1,2],[3,4]))

// rmArr = (arr,idx)=>{
//     console.log(arr[idx])
//     for(var i = idx;i<arr.length-1;i++){
//         swap(arr,i,i+1)
//     }
//     arr.pop()
//     return
// }

// rmr=(arr,s,e)=>{
//     len = arr.length
//     for(let i=0;i<len;i++){
//         if(i>=s && i<=e){
            
//             rm(arr,i)
//         }
//     }
//     console.log(arr)
//     return
// }

// rmr([1,2,3,4,5],1,3)

// function contains(str,arr){
//     for(var i=0; i<arr.length;i++){
//         if(arr[i] === str){
//             return true
//         }
//     }
//     return false
// }

// var insertAt = (arr,idx,val)=>{
//     arr.push(val)
//     for(let k=arr.length-1;k>idx;k--){
//         swap(arr,k,k-1)
//     }
//     return
// }

// function intermediateSums(arr){
//     let count = 0,sum = 0
//     for(let i=0;i<arr.length-1;i++){
//         sum+=arr[i]
//         count++;
//         if(count == 10){
//             insertAt(arr,i+1,sum)
//             sum=0;count=0
//         }
//     }
//     if(sum){
//         arr.push(sum)
//     }
//     return arr
// }

// console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))

// var dT = (arr)=>{
//     for(let i=0;i<arr.length;i+=2){
//         insertAt(arr,i+1,arr[i])
//     }
//     return arr
// }

// console.log(dT([4,"Ulysses",42,false]))

// var zipIt = (arr1,arr2)=>{
//     let count = 0
//     for(let i = 0;i<arr1.length-1;i+=2){
//         count++
//         insertAt(arr1,i+1,arr2[i])
//         console.log(count)
//     }
//     while(count<arr2.length){
//         arr1.push(arr2[count++])
//     }
//     return arr1
// }

// console.log(zipIt([1,2],[10,20,30,40]))

// var rmBlanks = (string)=>{
//     let string2=""
//     for(let i=0;i<string.length;i++){
//         if(string[i]!=" "){
//             string2+=string[i]
//         }
//     }
//     return string2
// }

// console.log(rmBlanks("PL  AYTHA  TF  U"))

// var getDigit = (string)=>{
//     let string2 = ""
//     let obj = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"}
//     for(let i = 0;i<string.length;i++){
//         if(obj[string[i]]){
//             string2+=string[i]
//         }
//     }
//     return string2
// }

// console.log(getDigit("0s1a3y5w7h9a"))

// var acronyms = (string)=>{
//     let string2=""
//     for(let i=0;i<string.length;i++){
//         if(string[i-1] == " "){
//             string2+=string[i]
//         }
//     }
//     return string2
// }

// console.log(acronyms(" there's no free lunch - gotta pay yer way. "))

// var nonspace = (string)=>{
//     let count = 0;
//     for(let i=0;i<string.lengthc;i++){
//         if(string[i]!= " "){
//             count++
//         }
//     }
//     return count
// }

// console.log(nonspace("Honey pie, you are driving me crazy"))

// var rmShortStrings = (arr)=>{
//     let len = arr.length
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i].length < len){
//             rmArr(arr,i)
//         }
//     }
//     return arr
// }

// console.log(rmShortStrings(["yo","cool","ay","n"]))

// var rmEvenLenStrings = (arr)=>{
//     for(let i = arr.length-1;i>=0;i--){
//         if(arr[i].length %2 ==0){
//             rmArr(arr,i)
//         }
//     }
//     return arr  
// }

// console.log(rmEvenLenStrings(["yo","cool","ay","n"]))

function romanize(num){
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}, roman = ""
    for(i in lookup){
        while(num >= lookup[i]){
            roman+=i
            num -= lookup[i]
        }
    }
    return roman
}



// function deromanize(string){
//     let lookup = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1}, count=0;i=0
//     while(i<string.length){
//         let combo = string[i] + string[i+1]
//         if(lookup[combo]){
//             count+=lookup[combo]
//             i+=2;continue
//         }
//         if(lookup[string[i]]){
//             count+=lookup[string[i]]
//             i++;
//         }
//     }
//     return count
// }

// console.log(deromanize("CCCXLIX"))

// let parensvalid = (string)=>{
//     var arr = [], j = 0;
//     while(j<string.length){
//         if(string[j] == "("){
//             arr.push(string[j])
//         }else if(string[j] == ")"){
//             if(arr.length){
//                 arr.pop()
//             }else{
//                 return false
//             }
//         }
//         j++
//     }
//     return true
// }

// console.log(parensvalid(")NE0(P)3"))


// var isPalindrome = (string)=>{
//     let s=0,e=string.length-1
//     while(string[s] == string[e]){
//        s++,e--;
//        if(s>e){
//            return true
//        }
//     }
//     return false
// }

// console.log(palindrome("r"))

// var longestPalindrome = (string)=>{
//     let longestpal=""
//     for(let i=0;i<string.length;i++){
//         for(let j= string.length-1;j>=0;j--){
//             if(isPalindrome(string.substring(i,j))){
//                 if(string.substring(i,j).length > longestpal.length){
//                     longestpal = string.substring(i,j)
//                 }
//             }
//         }
//     }
//     return longestpal
// }


// console.log(longestPalindrome("my favorite racecar erupted!"))


var createAlphabet = (obj)=>{
    if(obj!= undefined)
    {
        return strtoobj('abcdefghijklmnopqrstuvwxyz')
    }
    return 'abcdefghijklmnopqrstuvwxyz'.split('')
}

// function findIdx(arr,str){
//     for(var i=0; i<arr.length;i++){
//         if(arr[i] === str){
//             return i
//         }
//     }
// }

// let isAlphabetical = (string)=>{
//     let alphabet = createAlphabet()
//     for(let i=0;i<string.length;i++){
//         let idx = findIdx(alphabet,string[i])
//         if(string[i+1] !== alphabet[idx+1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(isAlphabetical("xyz"))

// function jsUcfirst(string) 
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// let getJiggy = (string)=>{
//     let greeting = "", letter = string[0]
//     for(let i = 1;i<string.length;i++){
//         greeting += string[i]
//     }
//     greeting += " to the " + letter
//     greeting = jsUcfirst(greeting)
//     return greeting
// }

// console.log(getJiggy("Abshir"))

String.prototype.reverse = function(){
    string2 = ""
    for(let i = this.length-1;i>=0;i--){
        string2+= this[i]
    }
    return string2
}

// let findSuffix = (string1,string2)=>{
//     let suffix = "",e1 = string1.length-1,e2=string2.length-1
//     while(string1[e1] == string2[e2]){
//         suffix += string1[e1--]
//         e2--;
//     }
//     return suffix.reverse()
// }

// let findCommonSuffix = (arr)=>{
//     let commonsuffix = findSuffix(arr[0],arr[1])
//     for(let i=2;i<arr.length;i++){
//         if(!arr[i].includes(commonsuffix)){
//             return " "
//         }
//     }
//     return commonsuffix
// }
// console.log(findCommonSuffix(["aytion","blation","yotion"]))

// let inRange = (arr,idx)=>{
//     if(arr[idx+1] && arr[idx+1] == arr[idx]+1){
//         return true
//     }
//     return false
// }

// let bookIndex = (arr)=>{
//     let string= " ",range=[],i=0
//     while(i<arr.length){
//         let j=i,s=i,e=i
//         while(inRange(arr,j)){
//             e=j+1
//             j++;
//         }
//         if(s!==e){
//             string+=arr[s]+"-"+arr[e] + ", "
//             e+=1
//             i+= e-s
            
//         }else{
//             string+=arr[i]+", "
//             i++;
//         }
//     }
//     return string
// }

// console.log(bookIndex([1,13,14,15,37,38,70,71,72,73,74,75]))


//  let coinChange = (change)=>{
//     let q = Math.floor(change / 25)
//     change = change%25
//     let d = Math.floor(change / 10)
//     change = change%10
//     let n = Math.floor(change/5)
//     change = change%5
//     p = change
//     return {quarters:q,dimes:d,nickels:n,pennies:p}
//  }

//  console.log(coinChange(119))


// let invertHash = (obj)=>{
//     for(key in obj){
//         obj[obj[key]] = key
//         delete obj[key]
//     }
//     return obj
// }

// console.log(invertHash({"yo":"wassup"}))

function SLL(){
    this.head = null
}

function Node(val){
    this.val = val;
    this.next = null;
}

// function Node(val){
//     this.val = val;
//     this.child = null
//     this.next = null;
// }

SLL.prototype.addnode = function(value){
    var node = new Node(value),
    currentNode = this.head;
    if (!currentNode){
        this.head = node;
        return ;
    }
    while (currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
};

// SLL.prototype.addFront = function(val){
//     let node = new Node(val)
//     if(this.head == null){
//         this.head = node;
//         return
//     }
//     let temp = this.head;this.head = node;this.head.next = temp
//     return;
// }

let newlist = new SLL()
// newlist.addFront(1)
// console.log(newlist)

// newlist.addnode(1)

SLL.prototype.contains = function(val){
    if(!this.head){return false}
    if(this.head.val == val){return true}
    runner = this.head
    while(runner){
        if(runner.val == val){
            return true
        }
        runner = runner.next
    }
    return false
}

// console.log(newlist.contains(1))

SLL.prototype.removeFront = function(){
    let temp = this.head
    this.head = this.head.next
    return temp
}

// newlist.removeFront()
// console.log(newlist)

// SLL.prototype.returnFront = function(){
//     if(!this.head){
//         return null
//     }

//     return this.head.val
// }

// console.log(newlist.returnFront())


let length = (node)=>{
    count  = 0
    if(node){
        runner = node
        while(runner){
            count++;
            runner = runner.next
        }
    }
    return count
}

// console.log(length(newlist.head))

// let display = (node)=>{
//     let string=""
//     if(node){
//         runner=node
//         while(runner){
//             string+=runner.val
//             runner=runner.next
//         }
//     }
//     return string
// }

// console.log(display(newlist.head))

// let max = (node)=>{
//     if(node){
//         let max = node.val
//         let runner = node
//         while(runner){
//             if(runner.val>max){
//                 max = runner.val
//             }
//             runner = runner.next
//         }
//         return max
//     }
//     return null
// }

// console.log(max(newlist.head))


// let min = (node)=>{
//     if(node){
//         let min = node.val
//         let runner = node
//         while(runner){
//             if(runner.val<min){
//                 min = runner.val
//             }
//             runner = runner.next
//         }
//         return min
//     }
//     return null
// }

// console.log(min(newlist.head))

// let average = (node)=>{
//     if(node){
//         let sum = 0,count=length(node),runner=node;
//         while(runner){
//             sum+=runner.val
//             runner = runner.next
//         }
//         return Math.floor(sum/count)
//     }
//     return null
// }

// console.log(average(newlist.head))

// let slBack = (node)=>{
//     if(node){
//         runner = node
//         while(runner.next){
//             runner = runner.next
//         }
//         return runner.val
//     }
//     return null
// }

// console.log(slBack(newlist.head))

// let rmLastNode = (list)=>{
//     if(list.head){
//         let runner = list.head,prev;
//         while(runner.next){
//             prev = runner
//             runner = runner.next
//         }
//         prev.next = runner.next
//         return list
//     }
//     return null
// }

// console.log(rmLastNode(newlist))

let minToFront = (list)=>{
    if(list.head){
        let minimum = min(list.head)
        let runner = list.head,prev;
        if(runner.val == minimum){
            return list
        }
        while(runner.val !== minimum){
            prev = runner;
            runner = runner.next
        }
        let temp = runner;
        let temp2 = list.head
        prev.next = runner.next;
        list.head = temp
        list.head.next = temp2
        return 
    }
    return null
}

// console.log(minToFront(newlist))

// let maxToBack = (list)=>{
//     if(list.head){
//         let maximum = max(list.head)
//         let runner = list.head,prev;
//         if(runner.val == maximum){
//             let temp = runner
//             list.removeFront()
//             list.addnode(runner.val)
//             return list.head.next
//         }
//         while(runner.val !== maximum){
//             prev = runner
//             runner = runner.next
//         }
//         let temp = runner.val
//         prev.next = runner.next;
//         list.addnode(runner.val)
//         return list.head.next
//     }
// }

// console.log(maxToBack(newlist))

// SLL.prototype.prependVal = function(val,before){
//     if(!this.contains(before)){
//         this.addnode(val)
//         return 
//     }
//     let node  = new Node(val)
//     if(this.head){
//         let runner = this.head,prev;
//         if(runner.val == before){
//             let temp = this.head
//             this.head = node
//             this.head.next = temp
//             return 
//         }
//         while(runner.val !== before){
//             prev = runner
//             runner = runner.next
//         }
//         let temp = runner
//         node.next = temp
//         prev.next = node
//         return 
//     }
// }

// console.log(prependVal(newlist,2,3))

// SLL.prototype.appendVal = function(val,after){
//     if(!this.contains(after)){
//         this.addnode(val)
//         return 
//     }
//     let node = new Node(val)
//     if(this.head){
//         if(this.head.val == after){
//            node.next = this.head.next
//            this.head.next = node
//            return 
//         }
//         let runner = this.head
//         while(runner.val!==after){
//             runner = runner.next
//         }
//         node.next = runner.next
//         runner.next = node
//         return 
//     }
// }

// console.log(appendVal(newlist,2,6))

// SLL.prototype.removeVal = function(val){
//     if(!this.contains(val)){
//         return false
//     }
//     if(this.head){
//         if(this.head.val == val){
//             this.head = this.head.next
//             return 
//         }
//         let runner = this.head,prev
//         while(runner.val !== val){
//             prev = runner
//             runner = runner.next
//         }

//         prev.next = runner.next
//         return 
//     }
// }

// console.log(sllRemove(newlist,6))

// let splitOnVal = (list,num)=>{
//     if(!list.contains(num)){
//         return list
//     }
//     if(list.head){
//         if(list.head.val == num){
//             return list
//         }
//         let runner = list.head,prev
//         while(num>0){
//             prev = runner
//             runner = runner.next
//             num--;
//         }
//         let newlist = new SLL()
//         newlist.head = runner
//         prev.next = null
//         return newlist
//     }
// }


// let sllRmNeg = (list)=>{
//     if(list.head){
//         let runner = list.head
//         while(runner){
//             if(runner.val<0){
//                 list.remove(runner.val) 
//             }
//             runner = runner.next
//         }
//         return list
//     }
//     return null
// }
// console.log(sllRmNeg(newlist))

SLL.prototype.concat = function(list){
    if(this.head){
        runner = this.head
        while(runner.next){
            runner = runner.next
        }
        if(list.head){
            runner.next = list.head
        }
        return this
    }
    return null
}
// arr = [1,2,3]
// newlist2 = new SLL()
// for(let i =0;i<arr.length;i++){
//     newlist.addnode(arr[i])
//     newlist2.addnode(arr[i])
// }

// let sllPartition = (list,val)=>{
//     if(!list.contains(val)){
//         return false
//     }
//     if(list.head){
//         let left = new SLL(),right = new SLL(),runner=list.head
//         list.remove(val)
//         while(runner){
//             if(runner.val < val){left.addnode(runner.val)}
//             else{right.addnode(runner.val)}
//             runner = runner.next
//         }
//         left.addnode(val)
//         return sllConcat(left,right)
//     }
// }
// console.log(sllPartition(newlist,1))

// let secondToLastVal = (list)=>{
//     if(length(list.head)>1){
//        let runner = list.head,prev
//        while(runner.next){
//            prev = runner
//            runner = runner.next
//        }
//        return prev.val
//     }
//     return "not enough nodes"
// }

// console.log(secondToLastVal(newlist))

// let slistCopy = (list)=>{
//     if(list.head){
//         let list2 = new SLL(), runner = list.head
//         while(runner){
//             list2.addnode(runner.val)
//             runner = runner.next
//         }
//         return list2
//     }
// }

// let checkStatus = (val,low,high)=>{
//     if(val > high || val < low){
//         return false
//     }
//     return true
// }

// let slistFilter = (list,lowVal,highVal)=>{
//     if(list.head){
//        let newlist = new SLL(), runner = list.head
//        while(runner){
//            if(checkStatus(runner.val,lowVal,highVal)){
//              newlist.addnode(runner.val)
//            }
//            runner=runner.next
//        }
//         return newlist
//     }
//     return null
// }

// console.log(slistFilter(newlist,2,3))

// let secondLargestVal=(list)=>{
//     if(list.head){
//         list.remove(max(list.head))
//         return max(list.head)
//     }
//     return null
// }

// console.log(secondLargestVal(newlist))

// let deDupe = (list)=>{
//     if(list.head){
//         let newlist = new SLL(),runner=list.head
//         while(runner){
//             if(!newlist.contains(runner.val)){
//                 console.log(runner.val)
//                 newlist.addnode(runner.val)
//             }
//             runner=runner.next
//         }
//         return newlist
//     }
// }

// console.log(deDupe(newlist))

// let zipLists = (list1,list2)=>{
//     let newlist = new SLL(),runner1 = list1.head, runner2 = list2.head
//     while(runner1 || runner2){
//         if(runner1){
//             newlist.addnode(runner1.val)
//             runner1 = runner1.next
//         }
//         if(runner2){
//             newlist.addnode(runner2.val)
//             runner2 = runner2.next
//         }
//     }
//     return newlist
// }

// console.log(zipLists(newlist,newlist2))

// function SLQueue(){
//     this.head = null;
//     this.tail = null
// }
// SLQueue.prototype.enqueue = function(val){
//     var node = new Node(val),
//     currentNode = this.head;
//     if (!currentNode){
//         this.head = node;
//         this.tail = node;
//         return 
//     }
//     while (currentNode.next){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = node;
//     this.tail = currentNode.next
//     return node;
// }

// SLQueue.prototype.dequeue = function(){
//     if(this.head){
//         let temp = this.head
//         this.head = this.head.next
//         this.tail = this.getTail()
//         return temp.val
//     }

//     return null
// }
// SLQueue.prototype.front = function(){
//     return this.head.val
// }
// SLQueue.prototype.contains = function(val){
//     if(!this.head){return false}
//     if(this.head.val == val){return true}
//     runner = this.head
//     while(runner){
//         if(runner.val == val){
//             return true
//         }
//         runner = runner.next
//     }
//     return false
// }

// SLQueue.prototype.isEmpty = function(){
//     if(!this.head){return true}
//     return false
// }

// SLQueue.prototype.size = function(){
//     return length(this.head)
// }

// SLQueue.prototype.getTail = function(){
//     if(this.head){
//         let run = this.head
//         while(run.next){
//             run=run.next
//         }
//         return run
//     }
// }


// let queue = new SLQueue()
// arr = [1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     queue.enqueue(arr[i])
// }

// let compareQueues = function(q1,q2){
//     if(q1.head.val !== q2.head.val){return false}
//     let run = q1.head, run2 = q2.head,count = q1.size()
//     while(count>0){
//         if(run2 == null || run.val!==run2.val){return false}
//         run = run.next
//         run2 = run2.next
//         count--;
//     }
//     return true
// }

// let removeMin = function(q){
//     if(q.head){
//         let minimum = min(q.head);
//         while(q.contains(minimum)){
//             minToFront(q)
//             queue.dequeue()
//         }
//         return q
//     }
//     return null
// }

// let interLeaveQ = function(q){
//     if(q.head){
//         let len = length(q.head)
//         if(len < 3){return q}
//         let run = q.head,
//             left = new SLQueue,
//                 half = Math.floor(len/2)
//         while(len > half){
//             left.enqueue(q.dequeue())
//             len--;
//         }
//         return zipLists(left,q)
//     }
// }

// function ArrStack(){
//     this.stack = []
// }

// ArrStack.prototype.Push = function(val){
//     return this.stack.push(val)
// }

// ArrStack.prototype.pop = function(){
//     return this.stack.pop()
// }

// ArrStack.prototype.top = function(){
//     let len = this.stack.length
//     if(len){
//         return this.stack[len-1]
//     }
//     return "Not enough elements in your stack"
// }

// ArrStack.prototype.contains = function(val){
//     let len = this.stack.length
//     if(len){
//         for(let i=0;i<len;i++){
//             if(this.stack[i]==val){
//                 return true
//             }
//         }
//         return false
//     }
//     return "Stack is empty"
// }

// ArrStack.prototype.isEmpty = function(){
//     let len = this.stack.length
//     if(len){return true}
//     return false
// }

// ArrStack.prototype.size = function(){
//     return this.stack.length
// }

// function SlStack(){
//     this.head = null;
//     this.tail = null;
// }

// SlStack.prototype.Push = function(val){
//     var node = new Node(val),
//     currentNode = this.head;
//     if (!currentNode){
//         this.head = node;
//         this.tail = node;
//         return 
//     }
//     while (currentNode.next){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = node;
//     this.tail = currentNode.next
//     return node;
// }

// SlStack.prototype.Pop = function(){
//     let currentNode = this.head, prev;
//     if (!currentNode){
//         return "Not enough nodes in your stacks"
//     }
//     while (currentNode.next){
//         prev = currentNode
//         currentNode = currentNode.next;
//     }
//     prev.next = null
//     this.tail = this.getTail()
//     return 
// }

// SlStack.prototype.getTail = function(){
//     if(this.head){
//         let run = this.head
//         while(run.next){
//             run=run.next
//         }
//         return run
//     }
// }
// SlStack.prototype.top = function(){
//     return this.tail
// }

// SlStack.prototype.contains = function(val){
//     if(!this.head){return false}
//     if(this.head.val == val){return true}
//     runner = this.head
//     while(runner){
//         if(runner.val == val){
//             return true
//         }
//         runner = runner.next
//     }
//     return false
// }

// SlStack.prototype.isEmpty = function(){
//     if(!this.head){return true}
//     return false
// }

// SlStack.prototype.size = function(){
//     return length(this.head)
// }

// let compareStacks = function(s1,s2){
//     if(s1.head.val !== s2.head.val){return false}
//     let run = s1.head, run2 = s2.head,count = s1.size()
//     while(count>0){
//         if(run2 == null || run.val!==run2.val){return false}
//         run = run.next
//         run2 = run2.next
//         count--;
//     }
//     return true
// }
// let stack = new SlStack()

// let bPoint = (arr)=>{
//     if(arr.length < 2){return true}
//     let e=arr.length-1, s=0,ss=0,es=0
//     while(s<arr.length-1 && e>0){
//         ss+=arr[s++];es+=arr[e--]
//     }
//     if(ss == arr[arr.length-1] || es == arr[0]){
//         return true
//     }
//     return false
// }

// let bSum = (arr,idx)=>{
//     if(arr.length < 2){return true}
//     let e=arr.length-1, s=0,ss=0,es=0 
//     while(s<idx || e>idx){
//         if(s == idx){es += arr[e--]}
//         else if(e == idx){ss+= arr[j++]}
//         else{
//             ss+=arr[s++]
//             es+=arr[e--]
//         }
//     }
//     return {start:ss,end:es}
// }

// let bIndex = (arr)=>{
//     for(let i=0;i<arr.length;i++){
//         let obj = bSum(arr,i)
//         if(obj.start == obj.end){return i}
//     }
//     return -1
// }
// let arrBinarySearch = (arr, val)=>{
//     let mid = Math.floor(arr.length/2), 
//     e = arr.length-1, s = 0
//     if(arr[mid] == val || arr[e] == val || arr[s] == val){return true}
//     while(e>mid || s<mid){
//         if(arr[e] == val || arr[s] == val){return true}
//         let eMid = Math.floor((e+mid)/2),
//                 sMid = Math.floor((s+mid)/2)
//         if(arr[eMid] == val || arr[sMid] == val){return true}
//         e--;s++
//     }
//     return false
// }


// let minSortedRotated=(arr)=>{
//     let mid = Math.floor(arr.length/2), 
//     e = arr.length-1, s = 0, min = arr[0]
//     while(e>mid || s<mid){
//         let eMid = Math.floor((e+mid)/2),
//                 sMid = Math.floor((s+mid)/2)
//         if(arr[eMid] < min){min=arr[eMid]}
//         if(arr[sMid] < min){min=arr[sMid]}
//         e--;s++
//     }
//     return min
// }
// console.log(minSortedRotated(["Gigli","Jay is cool", "Mavis", "Phoebe","Thurber","Anna","Celeste","Elon"]))
// String.prototype.toArray = function(){
//     let arr = []
//     for(let i = 0;i<this.length;i++){
//         arr.push(this[i])
//     }
//     return arr
// }

// let stringBinarySearch = (string,val)=>{
//     string = string.toArray()
//     console.log(string)
//     return arrBinarySearch(string,val)
// }

// console.log(stringBinarySearch(" &-0379DEFXZ[abcz|", 'c'))

// let arrFlatten = (arr)=>{
//    for(let i=0;i<arr.length;i++){
//        if(Array.isArray(arr[i])){
//            let subArray = arr.splice(i,1).pop()
//            arr.concat(subArray)
//        }
//    } 
//    return arr
// }

// let arrRemoveDupes = (arr)=>{
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         if(!obj[arr[i]]){obj[arr[i]]=1}
//         else{arr.splice(i,1)}
//     }
//     return arr
// }

// console.log(arrRemoveDupes([1,2,1,3,4,2,3,4]))

// let maxObj = (obj)=>{
//     let max = obj[Object.keys(obj)[0]]
//     for(key in obj){
//         if(obj[key]>max){max = key}
//     }
//     return max
// }

// let arrMode = (arr)=>{
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         if(!obj[arr[i]]){obj[arr[i]] = 1}
//         else{obj[arr[i]]++}
//     }
//     return maxObj(obj)
// }
// console.log(arrMode([1,2,3,2,2,4,5,5]))

// let findSum = (arr)=>{
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// let medianSorted=(arr,arr2)=>{
//     let sums = findSum(arr)+findSum(arr2),len = (arr2.length+arr.length)
//     return Math.floor(sums / len)
// }

// console.log(medianSorted([1,2,3],[4,5,6]))

// let timeToEng =(num)=>{
//     if(num == 0 || num == 1440){return "midnight"}
//     if(num == 720){return "noon"}
//     let hour = Math.round(num/60),string = "",obj = {13:1,14:2,15:3,16:4,17:5,18:6,19:7,20:8,21:9,22:10,23:11}
//     if(obj[hour]){var civilHour = obj[hour]}
//     num = num % 60
//     switch(num){
//         case 15:
//             string+="quarter past "
//             break;
//         case 30: 
//             string+="half past "
//             break;
//         case 40:
//             string+="20 till "
//             break;
//         case 45:
//             string+="quarter till "
//             break;
//         case 50: 
//             string+="10 till "
//             break;
//         default:
//             if(num > 30){string+=(60-num)+" minutes till "}
//             else{string+=num+" minutes past "}
//             break;
//     }
//     switch(hour){
//         case 0:
//             string+="midnight"
//             break;
//         case 12:
//             string+="noon"
//             break;
//         default:
//             if(hour<12){string+=hour+" am"}
//             else{string+=civilHour+" pm"}
//             break;
//     }
//     return string
// }

// console.log(timeToEng(725))

// let bIndex  = (arr)=>{
//     let sum = findSum(arr), lsum=0;
//     for(let i=0;i<arr.length;i++){
//         sum-=arr[i]
//         if(lsum == sum){
//             return i
//         }
//         lsum += arr[i]
//     }
//     return -1
// }

// console.log(bIndex([-2,5,7,0,3]))

// let alphaBetize = (string)=>{
//     return string.split('').sort().join('')
// }

// let isAn = (arr)=>{
//     let obj = {},endArr = [],str = ""
//     for(let i=0;i<arr.length;i++){
//         str = alphaBetize(arr[i])
//         let result = str in obj
//         if(!result){
//             endArr.push([arr[i]])
//             obj[str]=endArr.length-1
//         }else{
//             let idx = obj[str]
//             endArr[idx].push(arr[i])
//         }
//     }
//     return endArr
// }

// let checkStrings = (arr)=>{
//     for(let i = 0;i<arr.length;i++){
//         if(typeof(arr[i]) == "string"){return true}
//     }
//     return false
// }
// let isAnInPlace = (arr)=>{
//     let obj = {},str = "",i=0
//     while(checkStrings(arr)){
//         if(typeof(arr[i]) == "string"){
//             str = alphaBetize(arr[i])
//             let result = str in obj
//             if(!result){
//                 arr[i] = [arr[i]]
//                 obj[str]=i
//             }else{
//                 let idx = obj[str]
//                 arr[idx].push(arr[i])
//                 arr.splice(i,1)
//             }
//         }
//         if(i==arr.length-1){i=0;continue}
//         i++
//     }
//     return arr
// }

// console.log(isAnInPlace(["abc","bca","cba","tea","eat","bat"]))

// Array.prototype.contains = function(val){
//     for(let i = 0;i<this.length;i++){
//         if(this[i] == val){return true}
//     }
//     return false
// }

// let missingValue = (arr)=>{
//     let len = arr.length,missingVal = 0
//     for(let i=0;i<arr.length;i++){
//         if(!arr.contains(i)){missingVal = i}
//     }
//     return missingVal
// }

// let createObj = (num)=>{
//     let obj={}
//     for(let i = 0;i<=num;i++){
//         obj[i]=true
//     }
//     return obj
// }
// let findKey = (obj)=>{
//     for(key in obj){
//         if(obj[key] == true){return key}
//     }
// }

// let missingValueOpt =(arr)=>{
//     obj=createObj(arr.length)
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){obj[arr[i]] = false}
//     }
//     return findKey(obj)
// } 

// let maxSubArrSums=(arr)=>{
//     sum = 0, max=arr[0]
//     for(let i=0;i<arr.length-2;i++){
//         sum=0+arr[i]
//         for(let j=i+1;j<arr.length;j++){
//             sum+=arr[j]
//             if(sum>max){max=sum}
//         }
//     }
//     return max
// }
// console.log(maxSubArrSums([-1,-2,-4,-3,-2,-3]))

// SLL.prototype.reverse = function(){
//     if(length(this.head)<2){return this.head}
//     let initialnode = this.head
//     while(initialnode.next){
//         let temp = initialnode.next
//         initialnode.next = temp.next
//         let head = this.head
//         this.head = temp
//         this.head.next = head
//     }
//     return this
// }
// slist.reverse()
// // console.log(slist)
// SLL.prototype.Pop = function(){
//     let currentNode = this.head, prev;
//     if(!currentNode){
//         return "Not enough nodes in your stacks"
//     }
//     while (currentNode.next){
//         prev = currentNode
//         currentNode = currentNode.next;
//     }
//     let temp = prev.next
//     prev.next = null
//     return temp
// }

// SLL.prototype.slisPalindrome = function(){
//     let len = length(this.head)
//     if(len<2){return false}
//     let runner = this.head
//     while(runner.val == this.Pop().val){
//         runner = runner.next
//     }
//     if(length(this.head) == Math.floor(len/2) || length(this.head)< 2){return true}
//     return false
// }
// optimal solution

// SLL.prototype.slisPalindrome=function(){
//     let reverseList = slistCopy(this).reverse(),
//         r1=this.head,
//             r2 =reverseList.head,
//                 count=length(this.head)
//     while(r1.val == r2.val){
//         count--;
//         r1=r1.next
//         r2=r2.next
//         if(count == 0){return true}
//      }
//     return false
// }
// console.log(slist.slisPalindrome())

// let longestSubstring=(str)=>{
//     let string = "",longestSub = ""
//     for(let i=0;i<str.length-1;i++){
//         j = i+1
//         string= "" + str[i]
//         while(!string.includes(str[j])){string+=str[j++]}
//         if(string.length>longestSub.length){longestSub = string}
//     }
//     return longestSub
// }
// console.log(longestSubstring("abcbc2waa"))

// let kthNode = (list,k)=>{
//     if(k){
//         let count = length(list.head) - k, r = list.head
//         while(count>0){
//             r = r.next
//             count--;
//         }
//         return r.val
//     }
//     return "Give me a number thats > 0"
// }
// console.log(kthNode(slist,5))

// let shiftList=(list,shift)=>{
//     let count = length(list.head) - shift,r = list.head,prev;
//     while(count>0){prev=r; r=r.next;count--}
//     let temp=r,head = list.head
//     prev.next = null
//     list.head = temp
//     while(temp.next){temp = temp.next}
//     temp.next = head
//     return list.head.next
// }

// console.log(shiftList(slist,2))

// let sliceList = (list,num)=>{
//     let r = list.head,prev;
//     while(num>0){
//         prev = r
//         r = r.next
//         num--;
//     }
//     prev.next = null
//     return list
// }

// let unShift = (list,unshift)=>{
//     let split = sliceList(slistCopy(list),unshift),r = list.head
//     while(unshift>0){r=r.next;unshift--}
//     list.head = r;r=list.head
//     while(r.next){r = r.next}
//     r.next = split.head
//     return list.head
// }

// console.log(unShift(slist,2))




let l = new SLL()
l2 = new SLL()
// let l2 = new SLL()

for(let i=1;i<4;i++){
    l.addnode(i)
}


// let sumNumerals = (list,list2)=>{
//     let l1=list.head,l2 = list2.head, remainder = 0, sum = 0, newList = new SLL(), obj = {},count =0
//     while(l1&&l2){
//         sum = (l1.val + l2.val + remainder)
//         if(sum>=10){obj[count++] = sum%10;remainder = sum/10}
//         else{obj[count++]=sum;remainder=0}
//         l1=l1.next;l2=l2.next
//     }
//     while(l1){obj[count++]=l1.val;l1=l1.next}
//     while(l2){obj[count++]=l2.val;l2=l2.next}
//     for(key in obj){newList.addnode(obj[key])}
//     return newList.head
// }
// console.log(sumNumerals(l,l2))


// let arrFlatten = (arr)=>{
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             let subArray = arr.splice(i,1).pop()
//             arr.concat(subArray)
//         }
//     } 
//     return arr
//  }



// let slistFlatten = (list)=>{
//     let l = list.head
//     while(l){
//         if(l.child){
//             list.concat(l.child)
//         }
//         l = l.next
//     }
//     return list
// }

// console.log(slistFlatten(l))

// let setUpLoop =(list,len,point)=>{
//     let l = list.head, l2 = list.head
//     while(l.next){
//         if(point){l2=l2.next;point--}
//         l = l.next
//     }
//     l.next = l2
//     return list
// }


// let slistUnflatten = (list)=>{
//     let l = list.head; len = 0;
//     while(l){
//         if(l.child){
//             let len = length(l.child.head)
//             let start = l, r = l, r2 = l.child.head
//             while(r.val!==r2.val){
//                 r = r.next
//             }
//             while(len>0){
//                 r = r.next;len--
//             }
//             start.next = r
//         }
//         l = l.next
//     }
//     return list
// }

// let l3 = setUpLoop(l,length(l),2)


// let detectLoop=(list)=>{
//     let l = list.head,count = length(list), counter = 0;
//     while(l){
//         if(l.next){
//             l2 = l.next
//             for(let i=0;i<=count;i++){
//                 if(l2.next == l){return {location:counter,found:true,}}
//                 l2 = l.next
//             }
//         }
//         l =l.next
//         counter++
//     }   
//     return {found:false}
// }

// let breakLoop = (list)=>{
//     let loop = detectLoop(list)
//     if(!loop.found){return false}
//     let l = list.head,count = loop.location
//     while(count>0){l=l.next; count--;}
//     l.next = null
//     return list
// }

// let numberNodes = (list)=>{
//     let loop = detectLoop(list)
//     if(loop.found){
//         return length(breakLoop(list).head)
//     }
//     return length(list.head)
// }

// console.log(numberNodes(l3))

// SLL.prototype.swapPairs = function(){
//     let l = this.head
//     while(l&&l.next!==null){
//         let temp = l.next.val
//         l.next.val = l.val
//         l.val = temp
//         l = l.next.next
//     }
//     return this.head
// }

// let alph = new SLL()
// alph.addnode("a")
// alph.addnode("b")
// alph.addnode("c")

// console.log(alph.swapPairs())

// function DLNode(value)
// {
//     this.val = value;
//     this.prev = null;
//     this.next = null
// }

// function DList()
// {
//     this._length = 0;
//     this.head = null;
//     this.tail = null;
// }

// DList.prototype.adddl = function(val){
//     var node = new DLNode(val);
//     if(this._length){
//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node;
//     }else{
//         this.head = node;
//         this.tail = node;
//     }
//     this._length++; 
//     return node.prev;
// }

// let dl = new DList()
// for(let i=1;i<4;i++){dl.adddl(i)}
// console.log(dl)
// DList.prototype.prependVal = function(val,before){

// }


// let rSigma = (num)=>{
//     if(num == 0)
//         return 0
//     return rSigma(num-1)+num
// }   
// console.log(rSigma(5))

// let rFactorial=(num)=>{
//     if(num==0)
//         return 1
//     return rFactorial(num-1) * num
// }

// console.log(rFactorial(3))

// let rFloodFill = (arr,start,color)=>{
//     let y = start[0]
//     let x = start[1]
//     let startNum = arr[y][x]
//     arr[y][x] = color
//     if(arr[y-1] && arr[y-1][x] == startNum){
//         rFloodFill(arr,[y-1,x],color)
//     }  
//     if(arr[y+1] && arr[y+1][x] == startNum){
//         rFloodFill(arr,[y+1,x],color)
//     }  
//     if(arr[y][x+1] && arr[y][x+1] == startNum){
//         rFloodFill(arr,[y,x+1],color)
//     }
//     if(arr[y][x-1] && arr[y][x-1] == startNum){
//         rFloodFill(arr,[y,x-1],color)
//     }
//     return arr
// }

// let arr = 
// [[3,2,3,4,3],
// [2,3,3,4,0],
// [7,3,3,5,3],
// [6,5,3,4,1],
// [1,2,3,3,3]]
// console.log(rFloodFill(arr,[2,2],1))

// function rFib(num){
//     if (num < 1) return 0;
//     if (num == 1) return 1;
//     return rFib(num - 1) + rFib(num - 2);
// }
// console.log(rFib(6))

// let rBinarySearch = (arr,val)=>{
//     let len = arr.length,mid = Math.round(arr.length/2)
//     if(len == 1 && arr[0]!==val){return false}
//     if(arr[0] == val){return true}
//     let left = rBinarySearch(arr.slice(0,mid),val) 
//     let right= rBinarySearch(arr.slice(mid,len),val)
//     if(left || right){return true}
//     return false
// }

// console.log(rBinarySearch([4,5,6,8,12],5))

// let strSubsets = (str,arr,idx)=>{
//     let len = str.length
//     if(!arr.includes(str)){arr.push(str)}
//     if(idx == arr[0].length){return arr}
//     if(!arr.includes(str[0])){arr.push(str[0])}
//     if(len>1){
//         let endStart = str[0]+str[len-1];copy = str,count = str.length-1
//         if(!arr.includes(endStart)){arr.push(endStart)}
//         while(copy.length>1){
//             copy = copy.slice(0,count)
//             if(!arr.includes(copy)){arr.push(copy)}
//             count--
//         }
//         strSubsets(str.substring(idx,len),arr,idx+=1)
//     }
//     if(!arr.includes(str[len-1])){arr.push(str[len-1])}
//     return arr
// }

// console.log(strSubsets("abca",[],0))

// let rListLength = (node,count)=>{
//     if(node == null){
//         return count
//     }
//     return rListLength(node.next,count+1)
// }

// console.log(rListLength(l.head,0))

// let grapes = (arr,obj)=>{
//     if(obj.idx<arr.length){
//         obj.grapes+=arr[obj.idx]
//         obj.idx+=2
//         return grapes(arr,obj)
//     }
//     return obj.grapes
// }

// let arr = [1,2,3,4]
// let obj = {grapes:0,idx:1}

// console.log(grapes(arr,obj))

// let collatz = (num,count)=>{
//     if(num == 1){return count}
//     return collatz((num%2==0 ? num/2:(3*num)+1), count+=1)
// }

//first solution

// let odds = (num)=>{
//     if(num == 1){console.log(num);return}
//     if(num%2==0){
//         num-=1
//     }
//     if(num%2==1){
//         let recurse = odds(num-2)
//         console.log(Math.pow(num,2))
//     }
//     return num
// }

// let risingSquares = (num)=>{
//     if(num == 0){return}
//     if(num%2==1){
//         num-=1
//     }
//     if(num%2 == 0){
//         console.log(Math.pow(num,2))
//         return risingSquares(num-2)
//     }
// }
// console.log(console.log(risingSquares(odds(5))))

//better solution

// function evens(int){
//     if(int % 2 == 1){
//         int -=1
//     }
//     if(int > 0){
//         console.log(Math.pow(int,2));
//         var recurse = evens(int-2)
//     }
//     return 
// }
// function risingsquares(int){
//     if(int > 0 && int % 2 == 1){
//         var recurse = risingsquares(int-2)
//         console.log(Math.pow(int,2));
//     }
//     return int 
// }

// evens(risingsquares(5))

// let findQuestion = (string)=>{
//     let count = 0
//     for(let i=0;i<string.length;i++){
//         if(string[i] == "?"){count++}
//     }
//     return Math.pow(count,2)
// }

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// String.prototype.replaceAt = function(idx,replacement){
//     let str = ""
//     for(let i=0;i<this.length;i++){
//         if(i == idx){str+=replacement}
//         else{str+=this[i]}
//     }
//     return str
// }

// let binaryExpansion = (string,arr,stop)=>{
//     if(arr.length == stop){
//         return arr
//     }
//     let copy = string
//     for(let i=0;i<copy.length;i++){
//         let random = getRandomInt(0,1)
//         let str = ""
//         if(copy[i] == "?"){
//             copy = copy.replaceAt(i,random)
//         }
//     }  
//     if(!arr.includes(copy)){
//         arr.push(copy)
//     }
//     return binaryExpansion(string,arr,stop)
// }

// let string = "1?0?"
// let stop = findQuestion(string)

// console.log(binaryExpansion(string,[],stop))

// shuffle(array) {
//     var result = [], source = array.concat([]);
  
//     while (source.length) {
//       let index = Math.floor(Math.random() * source.length);
//       result.push(source.splice(index, 1)[0]);
//     }
  
//     return result;
//   }

// Array.prototype.shuffle = function(){
//     return this.map(function(n){ return [Math.random(), n] })
//              .sort().map(function(n){ return n[1] });
// }

// Bad solution on the the number of times the function will will recurse based on the length of the string powered by 2

// let stringAnagrams = (string,arr,num=Math.pow(string.length,string.length))=>{
//     if(num==0){
//         return arr
//     }
//     let strs = string.split("");strs = strs.shuffle().join('')
//     if(!arr.includes(strs)){
//         arr.push(strs)
//     }
//     num-=1
//     return stringAnagrams(string,arr,num)
// }

// console.log(stringAnagrams("team",[]))

// function isArrayInArray(arr, item){
//     let item_as_string = JSON.stringify(item);
  
//     let contains = arr.some(function(ele){
//       return JSON.stringify(ele) === item_as_string;
//     });
//     return contains;
// }

// Bad solution on the the number of times the function will will recurse based on the number input powered by 2

// let climbingStairs = (num,arr,max = Math.pow(num,num))=>{
//     if(arr.length == max){
//         return arr
//     }
//     let count = num;nums = []
//     while(count > 0){
//         let random = getRandomInt(1,2)
//         if(random<=count){
//             nums.push(random)
//             count = count - random
//         }else{
//             continue;
//         }
//     } 
//     if(!isArrayInArray(arr,nums)){
//         arr.push(nums)
//     }
//     max-=1
//     return climbingStairs(num,arr,max)
// }

// console.log(climbingStairs(4,[]))

// let arrSum = (arr)=>{
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         sum+= Math.pow(arr[i],2)
//     }
//     return sum
// }

// let expArr = (arr)=>{
//     for(let i=0;i<arr.length;i++){
//         for(let j = 0;j<arr[i].length;j++){
//             arr[i][j] = Math.pow(arr[i][j],2)
//         }
        
//     }
//     return arr
// }

// // Bad Solution fix it

// let sumSquares = (num,arr,subArr,i,end)=>{
//     if(end == 0){
//         return expArr(arr)
//     }
//     let sum = arrSum(subArr)
//     i+=1;end-=1
//     if(sum > num){
//         let mid = Math.round(arr.length/2)
//         if(subArr[mid]==1){
//             mid = mid+1
//             subArr.splice(mid,1)
//         }else{
//             subArr.splice(mid,1) 
//         }
//         return sumSquares(num,arr,subArr,i,end)
//     }else if(sum < num){
//         subArr.push(i)
//         return sumSquares(num,arr,subArr,i,end)
//     }else{
//         if(!isArrayInArray(arr,subArr)){
//             arr.push(subArr)
//             subArr = [1]
//             i = 1
//         }else{
//             subArr.splice(2)
//             subArr.push(i)
//         }
//         return sumSquares(num,arr,subArr,i,end)
//     }
// }

// let number = 30
// let stop = Math.pow(number,2)

// console.log(sumSquares(number,[],[1],1,stop))

// let allValidParens = (num, arr)=>{
    
// }


let stringToArr = (string)=>{
    let newstr = "",arr = []; j=0, punctuations = ".,:;!"
    while(string[j] == " "){j++;}
    for(let i = j;i<string.length;i++)
    {
        if(string[i] == " "){
            arr.push(newstr)
            newstr = "";
            continue
        }
        if(!punctuations.includes(string[i])){
            newstr += string[i]
        }
    }
    arr.push(newstr);
    return arr
}

// console.log(stringToArr("Life is not a drill!"))

let longestWord = (string)=>{
    let arr = stringToArr(string), max = arr[0].length
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length>max){
            max = arr[i]
        }
    }
    return max
}

// console.log(longestWord("Snap crackle pop makes the world go round!"))

// let reverseOrderWord = (string)=>{
//     let reversed = stringToArr(string), str2 = ""
//     for(let i = reversed.length-1;i>=0;i--)
//     {
//         str2+= " " + reversed[i];
//     }
//     return str2
// }

// console.log(reverseOrderWord("cool beans"))

// let uniqueWords = (string)=>{
//     string = string.toLowerCase()
//     let words = stringToArr(string),obj = {},word = ""
//     for(let i = 0;i<words.length;i++)
//     {
//         if(obj[words[i]] == null)
//         {
//             obj[words[i]] = 0
//         }else{
//             obj[words[i]] += 1
//         }
//     }
//     for(key in obj)
//     {
//         if(obj[key] == 0){word+=" " + key}
//     }
//     return word
// }

// console.log(uniqueWords("Sing a song! Sing a song; sing out loud and strong"))

// let rotateString = (string,rotate)=>{
//     let newstr = "", rotateby = string.length-rotate
//     for(let i =rotateby; i<string.length ; i++ )
//     {
//         newstr += string[i];
//     }
//     for(let i = 0;i<rotateby;i++)
//     {
//         newstr+=string[i]
//     }
//     return newstr
// }

// console.log(rotateString("Boris Godunov",5))
let strtoobj = (string,int)=>{
    let obj = {},punctuations = ".,:;!"
    for(let i = 0;i<string.length;i++)
    {
        if(int == null)
        {
            if(obj[string[i]] == null && string[i]!==" " && punctuations.includes(string[i]) == false)
            {
                obj[string[i]] = 0
            }else{
                obj[string[i]] += 1
            }
        }else{
            if(obj[string[i]] == null)
            {
                obj[string[i]] = 0
            }
        }
    }
    
    return obj
}


//This wouldn't work to check to see if a string is a rotation, it just checks to see if they have the same amount of characters

// let isRotation = (string,string2)=>{
//     let obj = strtoobj(string),obj2 = strtoobj(string2);
//     for(let i=0;i<string.length;i++)
//     {
//         if(obj[string[i]] != obj2[string[i]]){return false}
//     }
//     return true
// }

// console.log(isRotation("ionIs Rotat", "Is oRtation"))
//                         j                      j


//optimal solution

// let isRotationOpt = (string,string2)=>{
//     let count=0, count2=0;
//     while(string[count]!==string2[count2])
//     {
//         if(count2 == string.length){return false}
//         count2++
//     }

//     while(string[count] == string2[count2])
//     {
//         if(count2 == string2.length-1){count2 = 0; count++; continue}
//         count++;
//         count2++;
//     }

//     if(count == string.length){return true}
//     return false
// }

// function isRotation(string1,string2){
//     var count2 = 0
//     var count = 0
//     while(string1[0] !== string2[count2] ){
//         count2++
//     }

//     while(count < string1.length){
//         if(count2 == string2.length){
//             count2 = 0
//         }
//         if(string1[count] === string2[count2]){
//             count++;
//             count2++
//         }else{
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true
// }

// console.log(isRotationOpt("ionIs Rotat", "Is Rotation"))

// Array.prototype.reverse = function(){
//     let s = 0, e = this.length-1;
//     while(s<e){
//         swap(this,s,e);
//         s++;e--
//     }
//     return this
// }
// let censor = (string,array)=>{
//     arr = [], str = "";
//     for(let i = 0;i<string.length;i++)
//     {
//         for(let j=i+1;j<string.length;j++)
//         {
//             if(array.includes(string.substring(i,j)))
//             {
//                 arr.push(i,j);
//                 break;
//             }
//         }
//     }
//     len = arr.length-1;arr.reverse();range = arr[len-1]-arr[len]
//     for(let i =0;i<string.length;i++)
//     {
//         if(i>=arr[len] && i<=arr[len-1])
//         {
//             str+="x";
//             range--;
            
//         }else{
//             str+=string[i]
//         }
//         if(range == 0){
//             arr.pop();arr.pop();
//             len = arr.length-1
//             range = arr[len-1]-arr[len]
//         }
//     }
//     return str
// }

// console.log(censor("Snap crackle pop nincompoop!",["crack","poop"]))

// let badChars = (string,string2)=>{
//     let newStr = "";
//     for(let i=0;i<string.length;i++)
//     {
//         if(!string2.includes(string[i])){
//             newStr += string[i]
//         }
//     }
//     return newStr
// }

// console.log(badChars("wassup","up"))

// let GeneticMarker = (arr,str)=>{
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === str){return true}
//     }
//     return false
// }

// console.log(GeneticMarker(["cool","bea?ns","dude"],"beans"))

// let dedupe = (string)=>{
//     let newstr = "", obj = strtoobj(string);
//     for(let i = 0;i<string.length;i++)
//     {
//         if(obj[string[i]]>0)
//         {
//             obj[string[i]]--;
//         }else{
//             newstr+=string[i]
//         }
//     }
//     return newstr
// }

// console.log(dedupe("Snaps! crackles! pops!"))

// let uniqueChar = (string)=>{
//     let idx, obj = strtoobj(string);
//     for(let i = 0;i<string.length;i++)
//     {
//         if(obj[string[i]] == 0)
//         {
//             return i
//         }
//     }
// }


// let uniqueLetters = (string)=>{
//     let obj = strtoobj(string), newstr = "";
//     console.log(obj)
//     for(let i = 0;i<string.length;i++)
//     {
//         if(!obj[string[i]]>0)
//         {
//             newstr+=string[i]
//         }
//     }
//     return newstr
// }

// console.log(uniqueLetters("Snap! Crackle! Poop!"))

// let num = 100
// console.log(num % 100)
// let numToString = (num)=>{
//     return num + "";
// }

// // console.log(numToString(1234))

// let findPlace = (string)=>{
//     switch(string.length) {
//         case 1:
//             return 1
//         case 2:
//             return 2
//         case 3:
//             return "hundred"
//         case 4:
//             return "thousand"
//         case 5:
//             return "thousand"
//         case 6:
//             return "ten-thousand"
//         case 7:
//             return "million"
//         default:
//             return "The number is too big fam"
//     }
// }

// let onesAndTens = (num,place,obj)=>{
//     if(place == 1)
//     {
//         return obj[num]
//     }else{
//         let ones = num % 10;
//         if(ones == 0){ones = ""}
//         let tens = num - ones
//         return obj[tens] + " " +obj[ones]
//     }
// }

// let hundred = (num)=>{
//     return Math.round((num - (num%100) - (num%10))/100)
// }

// let thousand = (num) =>{
//     return Math.round((num - (num%1000) - (num%100) - (num%10))/1000)
// }

// let tenthousand = (num) =>{
//     return Math.round((num-(num%1000) - (num%100) - (num%10))/1000)
// }


// let numToText = (num)=>{
//     let numStr = numToString(num), place = findPlace(numStr),hundreds,thousands;
//     let obj = {"":"",0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"}
//     if(typeof(place) == "number")
//     {
//        return onesAndTens(num,place,obj) 
//     }else{
//         switch(place){
//             case "hundred":
//                 hundreds = hundred(num);
//                 return obj[hundreds] + " " + place + " " + onesAndTens(num%100,place,obj) 
//             case "thousand":
//                 thousands = thousand(num)
//                 num -= (thousands * 1000)
//                 hundreds = hundred(num);
//                 let round = hundreds == 0 && onesAndTens(num%100,place,obj) == 0  ? true : false
//                 if(round){ return obj[thousands] + " " + place }
//                 return obj[thousands] + " " + place+ " " +obj[hundreds] + " hundred " + onesAndTens(num%100,place,obj) 
//             default:
//                 return "Man this doesn't work"
//         }
//     }
// }

// console.log(numToText(1111))

// var sortString = (text)=>{
//     return text.split('').sort().join('').toLowerCase();
// };

// let isPermutation = (string,string2)=>{
//     let obj = strtoobj(sortString(string)), obj2 = strtoobj(sortString(string2));
//     for(key in obj)
//     {
//         if(obj[key] == obj2[key])
//         {
//             continue;
//         }else{
//             return false;
//         }
//     }
//     return true
// };

// console.log(isPermutation("mistermm","stimmmer"))

// let isPanagram = (string)=>{
//     string = sortString(string);
//     let obj = createAlphabet(1); 
//     for(let i = 0;i<string.length;i++)
//     {
//         if(obj[string[i]]!= null)
//         {
//             obj[string[i]]+=1;
//         }
//     }
//     for(key in obj)
//     {
//         if(obj[key]==0)
//         {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPanagram("How quickly daft jumping ebras vex!" ));

// let interPerms = (str,str2,str3)=>{
//     let one = 0, two = 0, three = 0
//     while(three < str3.length)
//     {
//         if(str[one++] != str3[three])
//         {
//             return false
//         }
//         three++;
      
//         if(str2[two++] != str3[three])
//         {
//             return false
//         }
//         three++;

//     }
//     if(one<str.length || two<str2.length){return false}
//     return true
// }

// console.log(interPerms("dne","ail","danlein"))

//Rays solution
// let allPermutations = (str,count)=>{
//     if(str.length<=1){console.log(count);return [str];}
//     let first  = str[0]
//     let rest = str.slice(1)
//     let perms = allPermutations(rest,count++)
//     let madePerms = []
//     for(let i = 0;i<perms.length;i++){
//         for(let k = 0;k<perms[i].length;k++)
//         {
//             madePerms.push(perms[i].slice(0,k)+first+perms[i].slice(1))
//         }
//     }
//     return madePerms
// }

// console.log(allPermutations("abc",0))

//Online java solution

// let permute = (str,l,r,arr)=>{
//     if(l==r) arr.push(str);
//     else{
//         for(let i = l ;i<=r;i++)
//         {
//             str = stringSwap(str,l,i);

//             permute(str,l+1,r,arr);
        
//             str = stringSwap(str,l,i);
//         }
//     }
//     return arr
// }

// let stringSwap= (str,i,j)=>{

//     let charArr = str.split(''), temp = charArr[i];

//     charArr[i] = charArr[j];

//     charArr[j] = temp;

//     return charArr.join('')

// }

// console.log(permute("team",0,3,[]))

// let isPerfectPanagram = (str)=>{
//     if(isPanagram(str)){
//         let obj = strtoobj(str);
//         for(key in obj)
//             if(obj[key]>0)
//                 return false;
//         return true
//     }
//     else 
//         return false;
// }

// console.log(isPerfectPanagram("Mr.Jock,TV quiz PhD, bags few lynx.g5"))

// let looseInterleaveString = (s1,s2,s3)=>{
//     let idx1=idx2=idx3=0;
    
//     while(idx3<s3.length){
//         if(s1[idx1++] != s3[idx3++])
//             return false
        
//         if(s2[idx2++] != s3[idx3++])
//             return false
          
//     }
//     return true;

// }


// console.log(looseInterleaveString("dne","ail","daniel"))

// let allLooselyInterleavedStrings = (s1,s2)=>{
//     let fullString = s1+s2,len = fullString.length-1;

//     return permute(fullString,0,len,[]);
// }

// console.log(allLooselyInterleavedStrings("ab","yz"))

let list  = [5,9,12,29,1,7,53,4,3,0,2]



// let selectionSort = (arr) =>
// {
//     let minIdx;

//     for(let i = 0;i<arr.length;i++)
//     {
//         minIdx = i;

//         for(let j = i;j<arr.length;j++)
//         {
//             if(arr[j] < arr[minIdx])
//                 minIdx = j;
//         }
      
//         swap(arr,i,minIdx)
//     }

//     return arr
// }

// console.log(selectionSort(list))

// let insertionSort = (arr) =>
// {
//     let start;
    
//     for(let i = 0;i<arr.length;i++)
//     {
//         start = arr[i]

//         j = i - 1

//         while(j>=0 && start<arr[j])
//             arr[j+1] = arr[j--]

//         arr[j+1] = start
//     }

//     return arr;
// }

// console.log(insertionSort(list))


// let mergeSort = (arr) =>
// {
//     if(arr.length == 1)
//         return arr
    
//     let mid = Math.floor(arr.length/2),
//             left = arr.slice(0,mid),
//                 right = arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
// }

// let merge = (left,right) =>
// {
//     let returnArr = [],
//             leftIdx = 0,
//                 rightIdx = 0

//     while(leftIdx < left.length && rightIdx < right.length)
//     {
//         if(left[leftIdx] < right[rightIdx])
//             returnArr.push(left[leftIdx++])
//         else
//             returnArr.push(right[rightIdx++])
//     }

//     return returnArr.concat(left.slice(leftIdx).concat(right.slice(rightIdx)))
// }



// console.log(mergeSort([8927564,87833366,91058312,69807422,33395580]))

//This is a helper function that is implemented in the partition function..
//Its purpose is to swap 2 elements in an array
/* @param arr is the list of integers that is being passed in */
/* @param i is starting swap index */
/* @param j is the second swap index */

let swap = (arr, i, j) =>{
    var temp = arr[i]; // store the element at the index i in into a temporary variable
    arr[i] = arr[j]; // store the element at index j in into index i
    arr[j] = temp; // store the item in the temporary variable in the index j slot
}
 
/*Quicksort function handles the main functionality for this sorting algorithm.
The Quicksort algorithms works by selecting a pivot index, and then taking all items larger
than the value at the pivot index and moving them to the left of that index, and items smaller than the pivot
value will get moved to the right. These steps will get repeated until the list is sorted completely
*/
/* @param arr is the list of integers that is being passed in */
/* @param left is the index of the starting element */
/* @param right is the index of the last element */
/* @returns sorted array of elements */
let quickSort = (arr,left,right) =>
{
    let len = arr.length; //set len == to length of the array
    let pivot; //declare a pivot variable for future use in function
    let partitionIdx; //delcare a partiion index for futrue use in the function

    if(left < right) 
    {
        pivot =  right // this is the pivot index assigned to the last index of the array/subarray

        // the index where the array will get partitioned is returned after this partition function is ran
        // see partition function for instructions on how it works
        partitionIndex = partition(arr,pivot,left,right) 

        //calling on the quicksort function recursively will continue this process until the array is completley sorted.

        //sorts the left side of the array
        quickSort(arr,left,partitionIndex - 1)

        //sorts the right side of the array
        quickSort(arr,partitionIndex + 1,right)
    }

    //returns sorted array 
    return arr
}

/* Partition function moves all the elements that are smaller than the element at the pivot index
to the right and the larger items the the left, while keeping track of the partition.
The position of the partition is needed so that we can split the array into two parts for future
steps.*/
/* @param arr is the list of integers that is being passed in */
/* @param pivot is the index used as divider to sort the array */
/* @param left is the index of the first element */
/* @param right is the index of the last element */
/* @returns the partionIndex for the quicksort function to use */

let partition = (arr,pivot,left,right)=>
{
    //this variable stores the value at the pivot index
   let pivotValue = arr[pivot];

    //this variable stores the partition index at the begining of the array/subarray
    let partitionIndex = left;

    //For loop goes from begining to end of array
    for(let i = left ;i<right;i++)
    {
        //if the value of the element at this index is greater than
        //the pivot value then we will move this element to the left side of the pivot
        if(arr[i] > pivotValue)
        {
            swap(arr,i,partitionIndex++)
        }
    } 
    
    //this last swap is made to reset the pivot to the end of the array
    //after the largest elements have been moved to the left.
    swap(arr,right,partitionIndex)

    //return the partition index so that it may be used in the quicksort function
    return partitionIndex
}


console.log(quickSort([3,1,2,5,4],0,4))


// let quadFunc = (x) =>{
//     return (7*(Math.pow(x,2))-(5*x)+8)
// }

// console.log(quadFunc(-2))
// console.log(quadFunc(-1))
// console.log(quadFunc(0))
// console.log(quadFunc(1))
// console.log(quadFunc(2))


// var twoSum = function(nums, target) {
//     let obj = {},
//         difference;
//     for(let i = 0;i<nums.length;i++){
//         if(obj[i] == null){
//             obj[i] = nums[i]
//         }
//     }
    
//     console.log(obj)
    
//     for(let i = 0;i<nums.length;i++){
//         difference = target - nums[i]
//         console.log(difference)
//         if(obj[i] == difference){
//             return [i, getKey(obj,difference)]
//         }
//     }
// };
    
// var getKey = function(obj,val){
//     for(key in obj){
//         if(obj[key] == val){
//             return key
//         }
//     }
// }