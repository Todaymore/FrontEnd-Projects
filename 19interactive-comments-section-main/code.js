//increase or decrease the number of likes on a user post or comment.
function likes(a)
{
  var newLikes = parseInt(document.getElementById("amyrobsonLikes").innerHTML);
  //alert(newLikes);
  newLikes += a;
  if(newLikes<0)
  {
    newLikes = 0;
  }
  else
  {
    document.getElementById("amyrobsonLikes").innerHTML = newLikes;
  }
}


var cloneCmtBox;// create outside because, i want to make it global and use it in one than one function.
//create a new comment box when the login user clicks on a reply button.
function createCommentBox()
{
   alert("i am in createCommentBox function");
   const cmtBox = document.getElementById("commentBox");
   cloneCmtBox = cmtBox.cloneNode(true);//use var*
   const parent = document.getElementById("allUser");
   const beforeUser = document.getElementById("secondUser");//use var*
   parent.insertBefore(cloneCmtBox, beforeUser); 
   //user var* : for making them global and using in createRepliedBox function()
}

function createRepliedBox()
{
   alert("i am in createRepliedBox function");
   const replyBox = document.getElementById("currentUser");
   var cloneReplyBox = replyBox.cloneNode(true);
   cloneReplyBox.id="clonedReplyBox";//we assing new id to cloneReplyBox so there is no duplication of id.
                                     //but we find a solution so that id automatically change rather than we need to assign manually becuase a single user can comment infinite number of times.
   const parent = document.getElementById("allUser");
   const beforeUser = document.getElementById("secondUser");//use var*
   parent.insertBefore(cloneReplyBox, beforeUser); 
   cloneCmtBox.remove();
   //yes cloneReplyBox is created and cloneCmtBox is deleted.

   //now take text of commentbox and save it in replybox
   const commentData = document.getElementById("commentText").innerHTML;
   alert(commentData);//it gives what we store physically why creating
                        //its prototype, and that text is"add a comment...
}                          // so everytime commentData variable preset
                           // "add a comment..."


//2 problems I am facing now, first is assign different id to every new comment box
//second how to take value of every comment and stored in its replied box after clicking on reply of comment box.

