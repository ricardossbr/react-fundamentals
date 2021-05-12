import React from 'react'

import DirectSon from './direct-son'

export default () => (
    <div>
        <DirectSon name="Jonas" age={20} nerd={true} />
        <DirectSon name="Patricia" age={29} nerd={false} />
    </div>
)