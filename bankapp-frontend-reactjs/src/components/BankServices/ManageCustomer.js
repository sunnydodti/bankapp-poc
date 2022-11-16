import React, { Component } from 'react'

export default class ManageCustomer extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center mt-5'>

                <div className='row-fluid'>
                    <ul class="nav nav-tabs span2" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="create-tab" data-bs-toggle="tab" data-bs-target="#create-tab-pane"
                                type="button" role="tab" aria-controls="create-tab-pane" aria-selected="true">Create</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="edit-tab" data-bs-toggle="tab" data-bs-target="#edit-tab-pane"
                                type="button" role="tab" aria-controls="edit-tab-pane" aria-selected="false">Edit</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="delete-tab" data-bs-toggle="tab" data-bs-target="#delete-tab-pane"
                                type="button" role="tab" aria-controls="delete-tab-pane" aria-selected="false">Delete</button>
                        </li>
                    </ul>

                    <div class="tab-content span2" id="myTabContent">
                        <div class="tab-pane fade show active" id="create-tab-pane" role="tabpanel" aria-labelledby="create-tab" tabindex="0">
                            <div className="card">
                                <div class="card-body">
                                    <form id='create-accpunt-form'>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Account Number</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Deposit Amount</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Description</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-primary ms-1">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="edit-tab-pane" role="tabpanel" aria-labelledby="edit-tab" tabindex="0">
                            <div className="card">
                                <div class="card-body">
                                    <form id='edit-accpunt-form'>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Account Number</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Withdraw Amount</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Description</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-primary ms-1">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="delete-tab-pane" role="tabpanel" aria-labelledby="delete-tab" tabindex="0">
                            <div className="card">
                                <div class="card-body">
                                    <form id='create-accpunt-form'>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Account Number</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Withdraw Amount</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">@</span>
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
                                                <label for="floatingInputGroup1">Description</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <button type="submit" class="btn btn-primary ms-1">Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
