# LRU-cache-algorithm
LRU cache algorithm implemented as a class
# Instalation
Include this in your script
```
import { LRUCache } from 'path/to/lrucache.js'
```
# Usage
```
// Create an instance of LRUCache and set its max size (5 by default).
let cache = new LRUCache(maxSize);

// Add new alement to cache
cache.set(1, 'data 1');

// Get the elemnt by key;
let data = cache.get(1); // 'data 1'
```
Check out [documentation](https://white11010.github.io/LRU-cache-algorithm/LRUCache.html) to read about all available methods and features. 
