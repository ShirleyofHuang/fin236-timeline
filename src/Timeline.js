import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';

export class Timeline extends React.Component {

    render () {
        return (
            <div>
                <VerticalTimeline>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(176, 142, 88)' }}
                        date="1990"
                        iconStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Collapse of Soviet Union and Finnish recession</h3>
                    </VerticalTimelineElement>
                    <h2 className="year-publish">2000</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2000"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Not Before Sundown</h3>
                        <h4 className="vertical-timeline-element-subtitle">Johanna Sinisalo</h4>
                        <p>
                        One night, the beautiful Angel finds a troll near his apartment and feels compelled to take it in.
                        He begins researching about trolls and becomes obsessed and in love with his new companion. It eventually
                        begins affecting his other relationships and his work. By the end of the book he protects the troll and escapes
                        into the forest to live with them instead.
                        </p>
                        <hr></hr> 
                        <p>
                            Themes: Homosexuality, Love, Obsession, Passion, Power
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2000"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Anil’s Ghost</h3>
                        <h4 className="vertical-timeline-element-subtitle">Michael Ondaatje</h4>
                        <p>
                        Anil (Sri Lankan native) returns back to Sri Lanka as a forensic pathologist during its
                         civil war. She discovers a skeleton of a murdered man in an ancient burial ground.
                          The murder seems to be politically motivated and bring justice for the nameless victims of the war.
                        </p>
                        <hr></hr>
                        <p>
                        Themes: War, Identity, History
                        </p>
                    </VerticalTimelineElement>
                    {/* 2001     */}
                    <h2 className="year-publish">2001</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2001"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Canal Grande</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hannu Raittila</h4>
                        <p>
                            Cannot find
                        </p>
                        <hr></hr> 
                        <p>
                            Cannot find
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(176, 142, 88)' }}
                        // date="2000"
                        iconStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">9/11 Terrorist Attack</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2001"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Clara Callan</h3>
                        <h4 className="vertical-timeline-element-subtitle">Richard B. Wright</h4>
                        <p>
                        A woman in her 30s tells her story as she lives alone in a rural community in the early 20th century.
                        She uses letters and journals to tell her story. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: Economics in the depression-era, greedy male sexuality, sexual politics, influence of radio and movies in North America. 
                        </p>
                    </VerticalTimelineElement> 
                    {/* 2002  */}
                    <h2 className="year-publish">2002</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2002"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"> Juoksuhaudantie</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kari Hotakainen</h4>
                        <p>
                        About a man who has lost his home after a divorce. With a pair of binoculars 
                        around his neck, he goes on a residential neighborhood safari as if on an African
                         savannah. It looks at the modern lower middle class                        
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: depicts the dissolution of the Nordic welfare state, parodies and ironises the age it is set in and, in particular, traditional male gender roles.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2002"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">A song for Nettie Johnson</h3>
                        <h4 className="vertical-timeline-element-subtitle">Gloria Sawai</h4>
                        <p>
                        Collection of short stories
                        Examines the lives of people on the margins
                        Goes into the lives of people and finds the squalor, fear, and unhappiness that lie beneath and she also uncovers hope. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: The importance of insignificant things, don’t regret the past, hope.                        </p>
                    </VerticalTimelineElement> 
                    {/* 2003 */}
                    <h2 className="year-publish">2003</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2003"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Punainen erokirja</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pirkko Saisio</h4>
                        <p>
                            Not found                       
                        </p>
                        <hr></hr> 
                        <p>
                            Not found
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2003"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Elle</h3>
                        <h4 className="vertical-timeline-element-subtitle">Douglas Glover</h4>
                        <p>
                        Adventures of a young french woman marooned on the Isle of Demons 
                        during Jacques Cartier’s attempt to colonize Canada. Contains real 
                        bears, spirit bears, and mystified and mystifying Natives. 
                        </p>
                        <hr></hr>
                        <p>
                            Themes: Canada meant to the Early european adventures, love and lust, death and beauty. 
                        </p>
                    </VerticalTimelineElement> 
                    {/* 2004 */}
                    <h2 className="year-publish">2004</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2004"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Runoilijan talossa</h3>
                        <h4 className="vertical-timeline-element-subtitle">Helena Sinervo</h4>
                        <p>
                            Not found                       
                        </p>
                        <hr></hr> 
                        <p>
                            Not found
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2004"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"> A Complicated Kindness</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miriam Toews</h4>
                        <p>
                        Set in a small religious town, where a sixteen yo girl lives with her father. 
                        Her sister and mother both left. She develops a relationship with a boy, 
                        she tries to bring her family together and find her place in society. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: Religion and Dogma, Family and home, Community, coming of age
                        </p>
                    </VerticalTimelineElement> 
                    {/* 2005 */}
                    <h2 className="year-publish">2005</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2005"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"> Berg</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bo Carpelan</h4>
                        <p>
                            Not found                       
                        </p>
                        <hr></hr> 
                        <p>
                            Not found
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2005"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">A Perfect Night to Go to China</h3>
                        <h4 className="vertical-timeline-element-subtitle">David Gilmour</h4>
                        <p>
                        About a child that goes missing and follows the life of his dad as the 
                        dad tries to search for his son. He begins to think that his child is 
                        speaking to him through his conscience. His behaviour becomes erratic, 
                        his wife eventually rejects him, he’s fired from his job, and the police 
                        think he’s the suspect. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: loss and grief
                        </p>
                    </VerticalTimelineElement> 
                    {/* 2006 */}
                    <h2 className="year-publish">2006</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2006"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Dar vi en gang gatt</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kjell Westo</h4>
                        <p>
                        About a civil war raging between the Red and the White in Finland.                        </p>
                        <hr></hr> 
                        <p>
                            Not found
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2006"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Law of Dreams</h3>
                        <h4 className="vertical-timeline-element-subtitle">Peter Behrens</h4>
                        <p>
                        Follows a young man who lives and works with his family on a potato farm in Ireland. 
                        When the Great Famine begins, his father refuses to leave the farm and eventually 
                        the family is burned alive weak with hunger. Fergus is sent to a workhouse where
                         he realizes he must leave before dying. He joins a gang of thieves working on the
                          railways and dreaming of the land of America.  
                        </p>
                        <hr></hr>
                        <p>
                        Themes: poverty, violence, empathy, history, strength
                        </p>
                    </VerticalTimelineElement> 
                    {/* 2007 */}
                    <h2 className="year-publish">2007</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2007"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Toiset kengat</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hannu Vaisanen</h4>
                        <p>
                            Not Found
                        </p>
                        <hr></hr> 
                        <p>
                            Not found
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(176, 142, 88)' }}
                        iconStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Internet Privacy Concerns</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2007"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Divisadero</h3>
                        <h4 className="vertical-timeline-element-subtitle">Michael Ondaatje</h4>
                        <p>
                        Tells the story of a makeshift family who lived peacefully until 
                        the daughter and the adopted son start a relationship. They then
                         kill the father and all three children leave to live a new life. 
                         The son becomes a gambler, one daughter becomes an investigator,
                          and Anne goes to France to research the life of a writer.  
                        </p>
                        <hr></hr>
                        <p>
                        Themes: family, trauma, moving on
                        </p>
                    </VerticalTimelineElement>
                    {/* 2008 */}
                    <h2 className="year-publish">2008</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2008"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Purge</h3>
                        <h4 className="vertical-timeline-element-subtitle">Sofi Oksanen</h4>
                        <p>
                        An elderly woman lives in a remote portion of Estonia. She one day discovers Zara, 
                        the granddaughter of her sister Ingel. Zara was forced into sex trade by 
                        the Russian Mafia. The story develops the relationship between Aliide and 
                        her sister and Zara’s redemption from her disenchantment with the world. 
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: Sexual Violence, sex trade, war, horrors infliced upon women by the Europeen military, resistance
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(176, 142, 88)' }}
                        // date="1990"
                        iconStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">World Financial Crisis</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2008"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Origin of Species</h3>
                        <h4 className="vertical-timeline-element-subtitle">Nino Ricci</h4>
                        <p>
                        About a 30 something man living in Montreal in 1986, he is immature, 
                        anxiety ridden, and unable to complete his dissertation. He’s in 
                        therapy after a breakup and his interest in Charles Darwin and the 
                        meaning of life has him dangling in exitensential limbo. The novel 
                        follows him for a year as he meets women and through flashbacks where 
                        he spent a year on Galapagos island with an english researcher.
                        </p>
                        <hr></hr>
                        <p>
                        Themes: the past and the 80s, emotional and intellectual maturation
                        </p>
                    </VerticalTimelineElement>
                    {/* 2009 */}
                    <h2 className="year-publish">2009</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2009"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title"> Uuni</h3>
                        <h4 className="vertical-timeline-element-subtitle">Antti Hyry</h4>
                        <p>
                        Follows the construction of an oven by a man as he reflects upon his life. 
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: life, continuation, permanence, and transience 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2009"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Mistress of Nothing</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kate Pullinger</h4>
                        <p>
                        Follows the life of Sally who’s the maid of Lady Duff Gordon who has been 
                        excited to Egypt due to her tuberculosis. Set in Victorian age, they 
                        head to Egypt and start to adapt to their new world and starts to get 
                        used to a new found freedom, however as a maid she cannot grasp more than 
                        her title allows her to. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: power of race, class, and love.
                        </p>
                    </VerticalTimelineElement>
                    {/* 2010 */}
                    <h2 className="year-publish">2010</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2010"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Nenapaiva</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mikko Rimminen</h4>
                        <p>
                        Follows life of Irma who is living by herself living day by day. 
                        In order to stop her solitary life, she starts knocking on the doors 
                        in her neighborhood and in Kerava. To talk to people, she makes up a 
                        story where she's conducting surveys, this causes the neighborhood 
                        to become suspicious and the police get interested. She becomes fond 
                        of her interviewees and every moment she’s in danger of getting caught,
                         her ways of solving problems becomes more and more unusual.                         </p>
                        <hr></hr> 
                        <p>
                        Themes:
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2010"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Cool Water</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dianne Warren</h4>
                        <p>
                        Tells the story of the inhabitants of a small town called Juliet in 
                        Saskatchewan. Series of short stories involving members of the town 
                        while also telling the story of the same day an old cowboy and a young
                        cowboy race. Both take place on the same day just years apart.
                        </p>
                        <hr></hr>
                        <p>
                        Themes: Change, Endurance, Resilience, potential happiness, hard work over luck
                        </p>
                    </VerticalTimelineElement>
                    {/* 2011 */}
                    <h2 className="year-publish">2011</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2011"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Hytti nro 6</h3>
                        <h4 className="vertical-timeline-element-subtitle">Rosa Liksom</h4>
                        <p>
                        A young woman boards a train in Moscow to head to Mongolia. She’s trying
                        to leave a broken relationship and wishes to be alone and so chooses an
                        empty compartment to sit in. Her solitude however is disrupted by the 
                        arrival of a grizzled and opinionated ex soldier. He begins to tell her 
                        stories of his sexual conquests and violent fights in lurid detail.                     
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: love story to Russia, its beauty and it's madness, lgbtq
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2011"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Sisters Brothers</h3>
                        <h4 className="vertical-timeline-element-subtitle">Patrick deWitt</h4>
                        <p>
                        Takes place in oregon and california in 1951
                        Two brothers who are assassins travel from Oregon to California in order 
                        to murder a man. They end up finding a rare red bear and kills up to get a 
                        bounty. However, they end up being tricked after handing the pelt over and 
                        kill the ones who have framed them. They end up reaching San Francisco but 
                        are tricked again. With little money left, they head back to Mayfield and 
                        lose all of their money. They end up going back home where their mother 
                        welcomes them. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: loyalty, greed, capitalism, testosterone, good vs evil, family
                        </p>
                    </VerticalTimelineElement>
                    {/* 2012 */}
                    <h2 className="year-publish">2012</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2012"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Is</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ulla-Lena Lundberg</h4>
                        <p>
                        Summer of 1947, a young priest and his family arrived by mail boat to a tiny island. 
                        They are to take over the homestead where Peter is to minister the community.                      
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: kindness, self sufficiency, life, death, change, traditions
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(176, 142, 88)' }}
                        iconStyle={{ background: 'rgb(176, 142, 88)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Boom of Smartphones</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2012"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Purchase</h3>
                        <h4 className="vertical-timeline-element-subtitle">Linda Spalding</h4>
                        <p>
                        1798, a young Quaker father and widower, leaves home to establish a new 
                        life along with his five children, a 15yo orphan wife. He later trades his horse for a slave and sets in motion a struggle in his conscience. About pioneer life.
                        His buying of the slave causes a series of tragic events.
                        </p>
                        <hr></hr>
                        <p>
                        Themes: freedom, religion, social expectations, sacrifice, faith
                        </p>
                    </VerticalTimelineElement>
                    {/* 2013 */}
                    <h2 className="year-publish">2013</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2013"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Jokapaivainen elamamme </h3>
                        <h4 className="vertical-timeline-element-subtitle">Riikka Pelo</h4>
                        <p>
                        About a Russian poet and her daughter as they try to establish connection with 
                        each other in the two decades before WW2. Ayla (daughter) is forced into a 
                        labour camp in Kom while Marina is in Jelabuga.                       
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: humanity, despair, love, betrayal, and writing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2013"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Luminaries</h3>
                        <h4 className="vertical-timeline-element-subtitle">Eleanor Catton</h4>
                        <p>
                        1866, west coast settlement of Hokitika to make his fortune on the goldfields
                        Walter Moody meets 12 men who inform him about the events that happened leading up to the current night. A man was found dead in his cabin and upon inspection, his cabin had several thousand pounds worth of gold. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: Foreignness, family, lies and deceit, wealth, chance, truth, revenge, greed
                        </p>
                    </VerticalTimelineElement>
                    {/* 2014 */}
                    <h2 className="year-publish">2014</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2014"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">He eivat tieda mita tekevat </h3>
                        <h4 className="vertical-timeline-element-subtitle">Jussi Valtonen</h4>
                        <p>
                        Joe Chayefski’s neuroscience lab is attacked my animal rights activists. 
                        Turns out, his son whom he had with his ex wife is involved. Joe learns 
                        that his son’s life has gone badly and now has become an extreme animal 
                        rights activist.                    
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: privacy, digitized western society, selfishness, greed
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2014"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Back of the Turtle</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thomas King</h4>
                        <p>
                        A scientist returns back to his home to commit suicide as he finds out that 
                        his invention has been used to kill of his entire native reserve in BC. 
                        But as he prepares to do so, he sees a young girl in the waves and saves 
                        her and is soon saving others as well. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: good vs evil, nature vs urbanization, wealth vs poverty, native land, first nations, moralities of science                        </p>
                    </VerticalTimelineElement>
                    {/* 2015 */}
                    <h2 className="year-publish">2015</h2>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2015"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Laura Lindstedt -- Oneiron </h3>
                        <h4 className="vertical-timeline-element-subtitle">Jussi Valtonen</h4>
                        <p>
                        Seven women meet in the afterlife and they try to face their faiths one at the time.                     
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: feminism, communication, sisterhood, life, body
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2015"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Daddy Lenin and Other Stories</h3>
                        <h4 className="vertical-timeline-element-subtitle">Guy Vanderhaeghe</h4>
                        <p>
                        Short stories typically set in Saskatchewan. Mostly focussed on men
                        </p>
                        <hr></hr>
                        <p>
                        Themes: growing up, screwing up and starting over, moving forward, being a man
                        </p>
                    </VerticalTimelineElement>
                       {/* 2016 */}
                       <h2 className="year-publish">2016</h2>
                       <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2016"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Akvarelleja Engelin kaupungista </h3>
                        <h4 className="vertical-timeline-element-subtitle">Jukka Viikila</h4>
                        <p>
                        Tells the tale of Engel who arrives in Helsinki to begin what will become 
                        his life’s work,to design Finland’s capital. Fictive diary which brings the 
                        19th century’s Helsinki to life.                    
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: life, city
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2016"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Do Not Say We Have Nothing</h3>
                        <h4 className="vertical-timeline-element-subtitle">Madeleine Thien</h4>
                        <p>
                        Shows the life of an extended family in China, showing the lives of two successive 
                        generations -- one whose lived through Mao’s cultural revolution and their children 
                        who became the students protesting in Tiananmen Square. The story centers around Marie 
                        and Ai Ming as they try to piece together the story of Marie’s story in present day 
                        Vancouver. Story focuses of her father, Ai Ming’s father, and another man were forced 
                        to reimagine their artistic and private selves during China’s political campaigns. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: china before, during, and after the Cultural Revolution. Family, isolation, 
                        loneliness, art, authoritarian regime, political oppression
                        </p>
                    </VerticalTimelineElement>
                       {/* 2017 */}
                       <h2 className="year-publish">2017</h2>
                       <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2017"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Niemi (Headland)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Juha Hurme -- </h4>
                        <p>
                            Checking
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2017"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">We’ll All Be Burnt in Our Beds Some Night</h3>
                        <h4 className="vertical-timeline-element-subtitle">Joel Thomas Hynes</h4>
                        <p>
                        A man who is considered a tough guy and loser goes into trial for an alleged assault 
                        charge involving his girlfriend. But in the end his girlfriend doesn’t show up due to 
                        a fatal car accident. He is then released and goes on a hitchhiking journey to deliver 
                        her ashes. His journey takes him to seal cars, confront cops, and wild animals, and even 
                        his dad. During his trip he revisits the choices he made and mistakes of his past.
                        Attempt to recuperate from a life of petty crime and shattered relationship, and accept himself. 
                        </p>
                        <hr></hr>
                        <p>
                        Themes: childhood, past, masculinity, canada travel, resilience
                        </p>
                    </VerticalTimelineElement>
                       {/* 2018 */}
                       <h2 className="year-publish">2018</h2>
                       <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2018"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Taivaanpallo</h3>
                        <h4 className="vertical-timeline-element-subtitle">Olli Jalonen</h4>
                        <p>
                        Set in the 1680s, science and religion go head to head in a duel as the 
                        rays of Enlightenment can be seen in the horizon. Angus, a young boy is 
                        set out to mark out the constellations to hone his eyesight. But a 
                        devastating act of violence directed at Anguss’ family marks the beginning 
                        of a restless time on the island. The secret catholics sonspire and the 
                        island's autocratic governor furthers his own interests. He is then stowed 
                        away on a ship bound for England and begins his new life. 
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: science, religion, learning
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2018"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">The Red Word</h3>
                        <h4 className="vertical-timeline-element-subtitle">Sarah Henstra</h4>
                        <p>
                        Karen enters campus and its revelry, particularly a fraternity. She wakes 
                        up one morning on the lawn of a house of radical feminismsts, and gets a 
                        crash course in the state of feminist activism on campus. She learns that 
                        the frat consists of a bunch of date rapists. Despite continueing to party 
                        there and dating one of the brothers, karen is equally sdecuded by the 
                        stimulation and of feminist who want her as a housemate. She gets caught 
                        between two polarized camps.
                        </p>
                        <hr></hr>
                        <p>
                        Themes: feminism, gender, rape culture, campus politics, victimization
                        </p>
                    </VerticalTimelineElement>
                       {/* 2019 */}
                       <h2 className="year-publish">2019</h2>
                       <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 47, 108)' }}
                        // date="2019"
                        iconStyle={{ background: 'rgb(0, 47, 108)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Bolla </h3>
                        <h4 className="vertical-timeline-element-subtitle">Pajtim Statovci</h4>
                        <p>
                        In april of 1995, a 22 yo married a student at the University of Pristina, 
                        he kept his head down to get a university degree in a time and place deeply 
                        hostile to Albanians. In a cafe, he meets a Serb and before the day ends 
                        everything has changed. His wife announces her first pregnancy and he starts 
                        living a secret life. His affair with the serb is derailed by the outbreak of 
                        war which sends him away while the Serb spirals down to a dark path. Later, 
                        he is then deported back to Pristina and is now alone and hopeless and begins 
                        to question his past.
                        </p>
                        <hr></hr> 
                        <p>
                        Themes: desire, destruction, intimacy, and the different fronts of war. 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 0)' }}
                        // date="2019"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Five Wives</h3>
                        <h4 className="vertical-timeline-element-subtitle">Joan Thomas</h4>
                        <p>
                        In 1956, a small group of evangelical Christian missionaries and their 
                        families journeyed to the rainforest in Ecuador to convert the people of 
                        Waorani (people who have never had contact with the outside). The men in 
                        the party enter the “intangible” zone and are all killed leaving their wives and children. 
                        About the wives that are left behind and their struggles
                        </p>
                        <hr></hr>
                        <p>
                        Themes: grief, doubt, family, religion, evangelism
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>            
            </div>

        )

    }
};