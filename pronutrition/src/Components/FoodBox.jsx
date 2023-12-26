import React, { Component } from 'react'
import '../App.css'

export default class FoodBox extends Component {
    constructor() {

        super()
        this.state = {
            val: 0,
            cal: 0
        }

    }

    dynamic = (e) => {
        this.setState(() => {
            return {
                val: e.target.value
            }
        })
    }

    increase_cal = (cal) => {
        this.setState(() => {
            return {
                val: this.state.val,
                cal: this.state.val * cal
            }
        })
    }
    reset_btn = () => {
        this.setState(() => {
            return {
                val: this.state.val = 0,
                cal: 0
            }
        })
    }


    render() {
        let data = this.props.food;
        return (

            <>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={data.img} className='image' />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{data.name}</strong> <br />
                                    <small>{data.cal} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value = {this.state.val} onChange={(e) => this.dynamic(e)} />

                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={() => this.increase_cal(data.cal)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className='cal'>
                        <div className='nameCal'>{this.state.val} {data.name} = {this.state.cal} cal</div>
                        <button className='reset' onClick={this.reset_btn}>reset</button>
                    </div>
                </div>
            </>
        )
    }
}