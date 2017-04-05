import React from 'react';

// css
import style from './index.scss';

const FriendlyLink = () =>
    (
        <section className={style.friendlyLink}>
            <div>
                <div className={style.title}>
                    <h3>
                        <a href="javascript:;" title="查看所有标签">友情链接</a>
                    </h3>
                    <span>Friendly Link</span>
                </div>
                <ul className={style.list}>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                    <li>
                        <a href="javascript">引领Web前沿</a>
                    </li>
                </ul>
            </div>
        </section>
    );

export default FriendlyLink;
