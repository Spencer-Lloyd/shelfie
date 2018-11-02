import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super()
        this.state = {
            item: {},
            imageUrlInput: '',
            productNameInput: '',
            priceInput: ''
        }

        this.baseState = this.state
        this.handleAddToInventory = this.state
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    handleImageUrlChange = (e) => {
        this.setState({
            imageUrlInput: e.target.value
        })
    }
    

    handleProductNameChange = (e) => {
        this.setState({
            productNameInput: e.target.value
        })
    }

    handlePriceChange = (e) => {
        this.setState({
            priceInput: e.target.value
        })
    }

    handleAddToInventory = () => {
        axios.post('/api/Product', {Image: this.state.imageUrlInput}).then(results => {
            this.setState({
                Image: results.data
            })
        })
    }

    handleAddTodo() {
        axios.post('/api/todos', {title: this.state.userInput}).then(results => {
            this.setState({
                todos: results.data,
                userInput: ''
            })
        })
    }

    render() {
        let {imageUrlInput, productNameInput, priceInput} = this.state
        return (
            <div>
                Form
                <span> Image URL:</span><input value={imageUrlInput} onChange={this.handleImageUrlChange}></input>
                <span> Product Name:</span><input value={productNameInput} onChange={this.handleProductNameChange}></input>
                <span> Price:</span><input value={priceInput} onChange={this.handlePriceChange}></input>
                <button onClick={this.resetForm}>Cancel</button>
                <button onClick={this.handleAddToInventory}>Add to Inventory</button>
            </div>
        )
    }
}