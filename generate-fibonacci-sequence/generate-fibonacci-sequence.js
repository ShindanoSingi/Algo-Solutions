/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev = 0;
    let curr = 1;

    yield prev;

    while(true){
        yield curr;
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */