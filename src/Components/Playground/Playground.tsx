import React, { Suspense } from 'react';
import { Spinner } from './Spinner';
import { TvShowList } from './TvShowList';
import { TvShowDetails } from './TvShowDetails';

export default function Playground() {
    return (
        <div id="playground">
            {/* <h1>Top 10 TV Shows of All Time {isPending && "(loading)"}</h1>
            <h1>Top 10 TV Shows of All Time</h1>
            <div className="flex">
                <Suspense fallback={<Spinner />}>
                    {/* <TvShowList startTransition={startTransition}/> */}
                    {/* <TvShowList/> */}
                {/* </Suspense> */}
                {/* <Suspense fallback={<Spinner />}> */}
                    {/* <TvShowDetails/> */}
                {/* </Suspense> */}
            {/* </div> */}
        </div>
    )
}
