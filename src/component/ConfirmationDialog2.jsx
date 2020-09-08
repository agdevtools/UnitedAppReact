import React, { Component } from 'react'
import button from 'bootstrap';
import Dialog from 'bootstrap';
import DialogActions from 'bootstrap';
import DialogContent from 'bootstrap';
import DialogContentText from 'bootstrap';
import DialogTitle from 'bootstrap';
import Slide from 'bootstrap';


class ConfirmationDialog2 extends Component  {

  render() {
return (

    <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          Are you sure you wish to create this player from modal 2 ?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" type="submit" data-dismiss="modal" >Save changes</button>
          </div>
        </div>
      </div>
    </div>

  );
}
}

export default ConfirmationDialog2