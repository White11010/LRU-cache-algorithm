/** Class representing a LRU cache algorithm */
class LRUCache {
    /**
     * Create a LRU cache.
     * @param {number} maxSize - maximum value of cache map size.
     */
    constructor(maxSize = 5) {
        this.maxSize = maxSize;
        this.cache = new Map;
    }

    /**
     * Get the key value.
     * @param {*} key - key of key-value pair of cache map
     * @return {*} a value of key-value pair.
     */
    get(key) {
        let item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);        
        }
        return item;
    }

    /**
     * Set the key-value pair.
     * @param {*} key - key of key-value pair of cache map
     * @param {*} value - value of key-value pair of cache map
     * @return {LRUCache} a LRUCache object.
     */
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        if (this.cache.size === this.maxSize) {
            this.cache.delete(this.lru());
        }
        this.cache.set(key, value);
        return this;
    }

    /**
     * Get the value of first key-value pair of the map collection.
     * @return {*} a value of key of key-value pair.
     */
    lru() {
        // Map.prototype.keys() returns a new Iterator object that contains the keys for each element in the Map object in insertion order. 
        // The next() method returns an object with two properties done and value. 
        return this.cache.keys().next().value;
    }
}

export { LRUCache }
