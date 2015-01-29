/**
 * Created by tzachit on 28/01/15.
 */

(function(angular){

    'use strict';

    angular.module('ObservableCollection', [])
        .factory('ObservableCollection', [
            function(){

                let _collection = Symbol();
                let _onAddListeners = Symbol();
                let _onUpdateListeners = Symbol();
                let _onRemoveListeners = Symbol();

                class ObservableCollection {

                    constructor(){
                        this[_collection] = new Map();
                        this[_onAddListeners] = [];
                        this[_onUpdateListeners] = [];
                        this[_onRemoveListeners] = [];
                    }

                    onAdd(callback){
                        if(!(typeof callback === 'function')){
                            throw new Error('on add callback must be function.');
                        }

                        this[_onAddListeners].push(callback);
                    }

                    onUpdate(callback){
                        if(!(typeof callback === 'function')){
                            throw new Error('on update callback must be function.');
                        }

                        this[_onUpdateListeners].push(callback);
                    }

                    onRemove(callback){
                        if(!(typeof callback === 'function')){
                            throw new Error('on remove callback must be function.');
                        }

                        this[_onRemoveListeners].push(callback);
                    }

                    get(key){
                        return this[_collection].get(key);
                    }

                    count(){
                        return this[_collection].size;
                    }

                    exist(key){
                        return this[_collection].has(key);
                    }

                    keys(){
                        return this[_collection].keys();
                    }

                    values(){
                        return this[_collection].values();
                    }

                    clear(){
                        this[_collection].clear();
                    }

                    toArray(){
                        return [for(n of this[_collection].values()) n];
                    }

                    [Symbol.iterator](){
                        return this[_collection].entries();
                    }

                    add(key, value){
                        this[_collection].set(key, value);
                        for(let listener of this[_onAddListeners]){
                            listener(key, value);
                        }

                        return true;
                    }

                    update(key, value){
                        this[_collection].set(key, value);
                        for(let listener of this[_onUpdateListeners]){
                            listener(key, value);
                        }

                        return true;
                    }

                    remove(key){
                        let value = this[_collection].get(key);

                        if(value === undefined){
                            return false;
                        }

                        if(!this[_collection].delete(key)){
                            return false;
                        }

                        for(let listener of this[_onRemoveListeners]){
                            listener(key, value);
                        }

                        return true;
                    }
                }

                return ObservableCollection;
            }
        ]);

}(window.angular));