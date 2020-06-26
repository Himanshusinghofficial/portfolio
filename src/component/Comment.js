import React from 'react'

const Comment = () => {
    return (
        <div className="alime-contact-form mt-50 my-5">
            <h4 class="mb-30">Leave A Comment</h4>

            <form action="#">

                <div class="row">
                    <div class="col-12 col-md-6">
                        <input type="text" name="message-name" class="form-control mb-30 my-1" placeholder="Your Name"></input>
                    </div>
                    <div class="col-12 col-md-6">
                        <input type="email" name="message-email" class="form-control mb-30 my-1" placeholder="Email"></input>
                    </div>
                    <div class="col-12">
                        <input type="text" name="website" class="form-control mb-30 my-1" placeholder="Websites(optional)"></input>
                    </div>
                    <div class="col-12">
                        <textarea name="message" class="form-control mb-30 my-1" placeholder="Messages"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" onclick="alert('Thank You!! your comment is submitted')" class="btn btn-danger my-4" >Send Messages</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Comment
