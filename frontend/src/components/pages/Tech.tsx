import Infra from "../../image/infra.png"
import ER from "../../image/ER.png"

const Tech = () => {
    
    return (
        <>
            <h1>アプリケーション「SUM APP」概要と設計開発について</h1>
            <section className="section">
                <div className="subject">
                    <h2>0.はじめに</h2>
                </div>
                <div>
                    <h3>0.1 自己紹介</h3>
                    <div>
                        <p>　初めまして、本アプリケーション「SUM APP」を作成した<strong>枡潟 慮充</strong>と申します。
                            現在はWEBエンジニアへのキャリアチェンジを目指し転職活動を行っております。
                            簡単ですが以下に経歴をまとめました。
                        </p>
                        <br />
                        <ul className="timeline">
                            <li>
                                <p className="timeline-date">2018年3月</p>
                                <div className="timeline-content">
                                    <h3>農芸化学系学科の学士卒業</h3>
                                    <p>有機合成化学を専攻し有機化合物の合成経路についての研究を行う。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2018年4月</p>
                                <div className="timeline-content">
                                    <h3>現職に入社</h3>
                                    <p>化学系製造業技術職として製品設計に3年半程従事。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2020年4月</p>
                                <div className="timeline-content">
                                    <h3>独学にてプログラミングの学習を開始</h3>
                                    <p>コロナ禍をきっかけに新しいことを始めようとプログラミングの学習を完全独学にて開始する。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2021年12月</p>
                                <div className="timeline-content">
                                    <h3>現職を退職</h3>
                                    <p>本気でWEBエンジニアへのキャリアチェンジを考え前職を退職。転職活動を開始する。</p>
                                </div>
                            </li>
                        </ul>
                        <br />
                        <p>　尚、現職での詳しい業務内容、WEBエンジニアへのキャリアチェンジの理由等は本ページの趣旨とは異なるため省略させていただきます。</p>
                    </div>
                </div>
                <div>
                    <h3>0.2 アプリ概要</h3>
                    <div>
                        <p>
                            　当アプリケーションは転職のためのポートフォリオとして作成を開始し、
                            以下の３つのコンセプトを持って開発することとしました。
                        </p>
                        <ul style={{listStyle: "number"}}>
                            <li>自分自身で使いたいと思えるアプリケーションを作成する。</li>
                            <li>完全独学でのデプロイを目指す。</li>
                            <li>実務の現場で実際に使用されている技術を使用する。</li>
                        </ul>
                        <h4>0.2.1 自分自身で使いたいと思えるアプリケーションを作成する。</h4>
                        <p>
                            　WEBエンジニアとして働くに当たって、Webに関する技術を磨くことは当然のことですが
                            それ以前に、世の中の役に立つ、意味のあるサービスを提供するということが根幹にあると考えています。
                            　そこで、まずは「意味のあるサービス」の中でもハードルが低そうな「自分自身が抱えてる問題を解決する
                            アプリケーション」を作成しようと考えました。
                            　家計簿として日々の収支情報をまとめつつ、自分の目標に沿って貯金を手助けしてくれるような
                        </p>
                        <h4>0.2.2 完全独学でのデプロイを目指す。</h4>
                        <p>
                            　私の場合、完全な未経験での転職活動になるため、ポートフォリオのレベルを上げ技術力を
                            証明することはもちろん、他の転職志望者との差別化を図らなければならないと考えました。<br />
                            　そこで、「エンジニアとして生きていくための圧倒的な自走力」をアピールすることが有効なのでは無いかと
                            考えました。WEBの世界では技術が日進月歩に進んでいるため、最先端を生きていくためには常に知識を
                            アップデートしていく必要があります。<br />
                            　例えば、今回フロントエンド実装に使用したREACTにおいてもHooksの導入であったりReact-Router５から６への
                            アップデートであったりRedux不要論が提唱されたりなどと頻繁に技術の入れ替えやそれに関する論争が起こっています。<br />
                            　これらの技術の進歩に追いつくためにも、「日々の自己研鑽ができる人材」というのがWEB業界における一種の良い人材
                            なのではないかと考えています。<br />
                            　以上の理由より、自学に励み実装していくやる気、それを続けていくことができる自走力を照明するために、
                            完全独学でのデプロイをコンセプトに添えこのアプリケーションを完成させました。
                        </p>
                        <h4>0.2.3 実務の現場で実際に使用されている技術を使用する。</h4>
                        <p>
                            　
                        </p>
                        
                    </div>
                </div>
                <div>
                    <h3>0.3 使用技術について</h3>
                    <div>
                        <p></p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>1. アプリケーションの設計開発について</h2>
                </div>
                <div>
                    <h3>1.1 バックエンドの開発について</h3>
                    <div>
                        <p></p>
                        <img src={ER} alt="er" />
                    </div>
                </div>
                <div>
                    <h3>1.2 フロントエンドの開発について</h3>
                    <div>
                        <p></p>
                        
                    </div>
                </div>
                <div>
                    <h3>1.3 インフラ構成について</h3>
                    <div>
                        <p></p>
                        <img src={Infra} alt="infra" />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>2.その他</h2>
                </div>
                <div>
                    <h3>2.1 今後の実装機能、改善点について</h3>
                    <div>
                        <p></p>
                    </div>
                </div>
                <div>
                    <h3>2.2 その他の開発アプリについて</h3>
                    <div>
                        <p></p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>3.最後に</h2>
                </div>
                <div>
                    <p></p>
                </div>
            </section>
        </>
    )
}

export default Tech;