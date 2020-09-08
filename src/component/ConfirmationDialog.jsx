import React from 'react';
import button from 'bootstrap';
import Dialog from 'bootstrap';
import DialogActions from 'bootstrap';
import DialogContent from 'bootstrap';
import DialogContentText from 'bootstrap';
import DialogTitle from 'bootstrap';
import Slide from 'bootstrap';

//const Transition = React.forwardRef(function Transition(props, ref) {
//  return <Slide direction="up" ref={ref} {...props} />;
//});

export default function AlertDialogSlide() {
//  const [open, setOpen] = React.useState(false);

//  const handleClickOpen = () => {
//    setOpen(true);
//  };

//  const handleClose = () => {
//    setOpen(false);
//  };

return (
  <div>
<div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
      Launch demo modal
    </button>
</div>

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
            <button type="button" class="btn btn-primary" type="submit" >Save changes</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}