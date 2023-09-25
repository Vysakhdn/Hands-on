import React from 'react';
import { ChannelConsumer, UserConsumer } from './userContext';

function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {username => (
          <ChannelConsumer>
            {channel => (
              <div>
                User Context value {username}, channel context value {channel}
              </div>
            )}
          </ChannelConsumer>
        )}
      </UserConsumer>
    </div>
  );
}

export default ComponentF;