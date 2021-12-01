import Logo from "../../image/logo.png"
import { Button } from "../atoms"
const Home = () => {

    return (
        <>
            <section className="wrapper">
            <p>貯金目標を立てて、毎月の計画的貯金を手助け！</p>
                <div className="wrapper-subject">
                    <div>
                        <img src={Logo} alt="logo" />   
                    </div>
                    <Button
                        children="会員登録してはじめる"
                        color="secondary"
                        size="large"
                        variant="contained"
                    />
                </div>
            </section>
            <section className="overview">
                <h3 className="subject">支出管理を行い貯金目標達成のモチベーションをあげましょう</h3>
                <div className="content">
                    <div>
                        <h4>SUM APPは<br />
                            <span>・　現在の貯金額　</span><br />
                            <span>・　目標貯金額　</span><br />
                            <span>・　貯金目標達成日　</span><br />
                            の３つを登録するだけですぐに使えます。
                        </h4>
                        <p>この３つを登録しなくても家計簿として使用できます。</p>
                    </div>
                    <div>
                        図
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h4>後は日々の支出を登録するだけ！</h4>
                        <p></p>
                    </div>
                    <div>
                        図
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;