"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1_ts_1 = require("../Nodes/node_1.ts");
var DataStructure_SinglyLinkedList = /** @class */ (function () {
    function DataStructure_SinglyLinkedList(arr) {
        if (arr.length <= 0) {
            this.head = null;
        }
        else {
            this.setArrayData(arr);
        }
    }
    DataStructure_SinglyLinkedList.prototype.setArrayData = function (arr) {
        var firstNode = new node_1_ts_1.Node_1(arr[0]);
        this.head = firstNode;
        var iterator = this.head;
        for (var i = 1; i < arr.length; i++) {
            var newNode = new node_1_ts_1.Node_1(arr[i]);
            iterator.next = newNode;
            iterator = iterator.next;
        }
    };
    DataStructure_SinglyLinkedList.prototype.print = function () {
        if (this.head === null) {
            console.log("Error: The list is empty.");
        }
        else {
            var iterator = this.head;
            process.stdout.write("|");
            while (iterator.next !== null) {
                process.stdout.write(iterator.data + "|");
                iterator = iterator.next;
            }
            console.log(iterator.data + "|");
            console.log();
        }
    };
    DataStructure_SinglyLinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    DataStructure_SinglyLinkedList.prototype.size = function () {
        var listSize = 0;
        var iterator = this.head;
        while (iterator !== null) {
            iterator = iterator.next;
            listSize++;
        }
        return listSize;
    };
    DataStructure_SinglyLinkedList.prototype.pushFront = function (element) {
        var newNode = new node_1_ts_1.Node_1(element);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    DataStructure_SinglyLinkedList.prototype.pushBack = function (element) {
        var newNode = new node_1_ts_1.Node_1(element);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var iterator = this.head;
            while (iterator.next !== null) {
                iterator = iterator.next;
            }
            iterator.next = newNode;
        }
    };
    DataStructure_SinglyLinkedList.prototype.peekFront = function () {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    };
    DataStructure_SinglyLinkedList.prototype.peekBack = function () {
        if (this.head === null) {
            return null;
        }
        var iterator = this.head;
        while (iterator.next !== null) {
            iterator = iterator.next;
        }
        return iterator.data;
    };
    DataStructure_SinglyLinkedList.prototype.popFront = function () {
        if (this.head === null) {
            return null;
        }
        var headData = this.head.data;
        if (this.head.next === null) {
            this.head = null;
        }
        else {
            this.head = this.head.next;
        }
        return headData;
    };
    DataStructure_SinglyLinkedList.prototype.popBack = function () {
        if (this.head === null) {
            return null;
        }
        var iterator = this.head;
        var prevNode = null;
        while (iterator.next !== null) {
            prevNode = iterator;
            iterator = iterator.next;
        }
        var tailData = iterator.data;
        if (prevNode === null) {
            this.head = null;
        }
        else {
            prevNode.next = null;
        }
        return tailData;
    };
    return DataStructure_SinglyLinkedList;
}());
var emptyArr = [];
var singlyList = new DataStructure_SinglyLinkedList(emptyArr);
singlyList.print();
