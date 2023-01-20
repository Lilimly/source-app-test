import React, { useState } from 'react';
import { useEffect } from 'react';

export const RankingPage = () => {
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        fetch("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cec89a72-46d8-429e-b38f-a2407bfdc962/ranking.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230120T114343Z&X-Amz-Expires=86400&X-Amz-Signature=9a10e4a7746292bfa48c159d5aa7272466658bdb9d74cc7dcccf003610216c4e&X-Amz-SignedHeaders=host&x-id=GetObject")
            .then(response => response.json())
            .then(data => setRankingData(data))
    }, [])

    return (
        <div className="ranking-page">
            <p className="ranking-page__title">Ligue 1</p>
            {rankingData && rankingData.map((team: any) => (
                <div key={team.id} className="ranking-page__team-container">
                    <p className="ranking-page__team-text">{team.id}</p>
                    <p className="ranking-page__team-text">{team.name}</p>
                    <p className="ranking-page__team-text">{team.point} points</p>
                    <p className="ranking-page__team-text">{team.game} games</p>
                    <p className="ranking-page__team-text">{team.goal} goals</p>
                    <p className="ranking-page__team-text">{team.victory} victory</p>
                    <p className="ranking-page__team-text">{team.defeat} defeat</p>

                </div>
            ))}
        </div>
    );
};