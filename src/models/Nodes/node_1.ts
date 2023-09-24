export class Node<E> {
  public data: E;
  public next: Node<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}
