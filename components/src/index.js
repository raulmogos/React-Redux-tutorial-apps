import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  const randName = faker.name.findName;
  const randTimeAgo = faker.date.past;
  const randAvatar = faker.image.avatar;
  const randText = faker.lorem.words;

  const arrayOfComponents = [];

  for (let i = 0; i <= 10; i++) {
    arrayOfComponents.push(
      <ApprovalCard key={i}>
        <CommentDetail
          author = {randName()}
          timeAgo = {randTimeAgo().toDateString()}
          avatar = {randAvatar()}
          text = {randText()}
        />
      </ApprovalCard>
    );
  }

  let nestedComp = (<ApprovalCard></ApprovalCard>);
  for (let i = 0; i < 6; i++) {
    nestedComp = (
      <ApprovalCard>
        {nestedComp}
      </ApprovalCard>
    );
  }

  return (
    <div className="ui container comments">
      {nestedComp}
      {arrayOfComponents}
      
      {/* <ApprovalCard>
        <CommentDetail
          author = {randName()}
          timeAgo = {randTimeAgo().toDateString()}
          avatar = {randAvatar()}
          text = {randText()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author = {randName()}
          timeAgo = {randTimeAgo().toDateString()}
          avatar = {randAvatar()}
          text = {randText()}
        />
      </ApprovalCard> */}
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
