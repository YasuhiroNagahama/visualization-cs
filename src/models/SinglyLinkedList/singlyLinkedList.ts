import { Node } from "../Nodes/node_1";

class DataStructure_SinglyLinkedList<E> {
  public head: Node<E> | null = null;

  constructor(arr: E[]) {
    if (arr.length <= 0) {
      this.head = null;
    } else {
      this.setArrayData(arr);
    }
  }

  public setArrayData(arr: E[]): void {
    const firstNode = new Node<E>(arr[0]);
    this.head = firstNode;

    let iterator = this.head;

    for (let i = 1; i < arr.length; i++) {
      const newNode = new Node<E>(arr[i]);
      iterator.next = newNode;

      iterator = iterator.next;
    }
  }

  public print(): void {
    if (this.head === null) {
      console.log("Error: The list is empty.");
    } else {
      let iterator = this.head;

      process.stdout.write("|");

      while (iterator.next !== null) {
        process.stdout.write(iterator.data + "|");
        iterator = iterator.next;
      }

      console.log(iterator.data + "|");
      console.log();
    }
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public size(): number {
    let listSize = 0;

    let iterator = this.head;

    while (iterator !== null) {
      iterator = iterator.next;
      listSize++;
    }

    return listSize;
  }

  public pushFront(element: E): void {
    const newNode = new Node<E>(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  public pushBack(element: E): void {
    const newNode = new Node<E>(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let iterator = this.head;

      while (iterator.next !== null) {
        iterator = iterator.next;
      }

      iterator.next = newNode;
    }
  }

  public peekFront(): E | null {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
  }

  public peekBack(): E | null {
    if (this.head === null) {
      return null;
    }

    let iterator = this.head;

    while (iterator.next !== null) {
      iterator = iterator.next;
    }

    return iterator.data;
  }

  public popFront(): E | null {
    if (this.head === null) {
      return null;
    }

    const headData = this.head.data;

    if (this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }

    return headData;
  }

  public popBack(): E | null {
    if (this.head === null) {
      return null;
    }

    let iterator = this.head;
    let prevNode: Node<E> | null = null;

    while (iterator.next !== null) {
      prevNode = iterator;
      iterator = iterator.next;
    }

    const tailData = iterator.data;

    if (prevNode === null) {
      this.head = null;
    } else {
      prevNode.next = null;
    }

    return tailData;
  }
}

const arr: number[] = [];
const singlyLinkedList: DataStructure_SinglyLinkedList<number> =
  new DataStructure_SinglyLinkedList(arr);
singlyLinkedList.print();
