class Node_1<E> {
  public data: E;
  public next: Node_1<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}
