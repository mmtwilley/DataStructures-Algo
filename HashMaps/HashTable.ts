class HashTable<T> {
    dataMap: Array<Array<[string, T]>>; // An array of arrays, where each sub-array is a key-value pair.
  
    constructor(size = 7) {
      this.dataMap = new Array(size);
    }
  
    private _hash(key: string) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
      }
      return hash;
    }
  
    public set(key: string, value: T) {
      let index = this._hash(key);
      if (!this.dataMap[index]) {
        this.dataMap[index] = [];
      }
      return this.dataMap[index].push([key, value]); // Store the key-value pair in the sub-array.
    }
  
    public get(key: string): T | undefined {
      let index = this._hash(key);
      if (this.dataMap[index]) {
        for (let i = 0; i < this.dataMap[index].length; i++) {
          if (this.dataMap[index][i][0] == key) {
            return this.dataMap[index][i][1]; // Access the value from the sub-array.
          }
        }
      }
      return undefined;
    }

    public key(){
        let allkeys:string[] = [];
        for(let i = 0; i < this.dataMap.length; i++){
           if(this.dataMap[i]){
            for(let j = 0; j < this.dataMap[i].length; j++){
                allkeys.push(this.dataMap[i][j][0])
            }
           }
        }
        return allkeys;
    }



}
  