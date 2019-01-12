import Boom from 'boom';

import User from '../db/models/user';
import Conversation from '../db/models/conversation';

export default async function (request, reply) {
  console.log('conversation3',request.body.username);
  await User.findOne({ username: request.body.username }).populate('conversations').then(
    (user) => {
      if (user) {
        const ConversationExist =user.conversations.filter(conversation => (
            conversation.userOneId === request.body.username ||
            conversation.userTwoId === request.body.username
          ),
        )

        const isConversationExist = ConversationExist.length > 0;
        if (isConversationExist) {
          reply.json(ConversationExist);
        } else {
          User.findOne({ username: request.body.friendname }).then(
            (friend) => {
              const newConversation = new Conversation({
                userOneId: user.username,
                userTwoId: friend.username,
              });
              newConversation.save().then((conversation) => {
                user.conversations.push(conversation);
                user.save();
                friend.conversations.push(conversation);
                friend.save();

                reply.json(conversation);
              });
            },
          );
        }
      } else {
        reply.json(Boom.notFound('Cannot find user'));
      }
    },
  );
}
