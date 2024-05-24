/*
    Hash Table
    1. Hash Table is a data structure which stores data in an associative manner.
    2. In a hash table, data is stored in an array format, where each data value has its own unique index value.
    3. Access of data becomes very fast if we know the index of the desired data.
    4. A hash function is used to generate a unique key for storing or retrieving data from the hash table.
*/


/*
    JavaScript implementation of Hash Table
*/


class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []);
    }

    // Simplified hash function to compute the index for a given key
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const existingPair = bucket.find((pair) => pair[0] === key);

        if (existingPair) {
            existingPair[1] = value; // Update value if key already exists
        } else {
            bucket.push([key, value]); // Add new key-value pair
        }
    }

    // Retrieve the value associated with a key
    lookup(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const pair = bucket.find((pair) => pair[0] === key);

        return pair ? pair[1] : undefined; // Return value if found, otherwise undefined
    }

    // Delete a key-value pair from the hash table
    delete(key) {
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        const pairIndex = bucket.findIndex((pair) => pair[0] === key);

        if (pairIndex !== -1) {
            bucket.splice(pairIndex, 1); // Remove the key-value pair
            return true; // Return true if the key was found and deleted
        }
        return false; // Return false if the key was not found
    }
}

// Usage example
const ht = new HashTable(10);
ht.insert("key1", "value1");
ht.insert("key2", "value2");
ht.insert("key3", "value3");
ht.insert("key4", "value4");
ht.insert("key5", "value5");

// show all the buckets
console.log("Bucket:", ht.buckets);


console.log(ht.lookup("key1"));  // Output: value1
console.log(ht.lookup("key2"));  // Output: value2


ht.delete("key1");
console.log(ht.lookup("key1"));  // Output: undefined
