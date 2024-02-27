/** IndexError: raised when index not found. */

class IndexError extends Error {
  //TODO: implement idx err msg?
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);
    debugger;

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {

    const newNode = new NodeStr(val);

    newNode.next = this.head
    if (this.head === null) this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if (this.head === null || this.tail === null) throw new IndexError;

    let current: NodeStr = this.head;
    let removed = this.tail;

    while (current.next !== this.tail && current.next !== null) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return removed.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.head === null || this.tail === null) throw new IndexError;

    let removed = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return removed.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  //[a, b, c, d] head: a, tail: b, len: 2
  //getAt(0) -> a
  //0 = head + 0
  //1 = head.next -> b
  //2 = head.next.next -> c
  //curr = null

  getAt(idx: number): string {

    if (this.head === null || this.tail === null) throw new IndexError();
    if (idx >= this.length || idx < 0) throw new IndexError();

    let current: NodeStr = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next!;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};