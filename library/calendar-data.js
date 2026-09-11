/* Music calendar — "on this day" events for the 20 composers in the library.
   {md, kind, composer(id → avatar), title, text}. Keyed MM-DD. Multiple per day allowed.
   kinds: Birthday · Remembered · Marriage · Debut · Premiere · Milestone */
window.MUSIC_CALENDAR = [
  // ---- January ----
  { md:"01-06", kind:"Birthday", composer:"scriabin", title:"Scriabin born", text:"Alexander Scriabin was born in Moscow (1872) — a mystic who dreamed music could end the world." },
  { md:"01-09", kind:"Premiere", composer:"ravel", title:"Gaspard de la nuit", text:"Ricardo Viñes premiered Ravel's fearsome three-movement Gaspard in Paris (1909)." },
  { md:"01-14", kind:"Premiere", composer:"ravel", title:"Piano Concerto in G", text:"Marguerite Long gave the premiere with Ravel conducting, in Paris (1932)." },
  { md:"01-15", kind:"Premiere", composer:"tchaikovsky", title:"The Sleeping Beauty", text:"Tchaikovsky's ballet premiered at the Mariinsky Theatre, St Petersburg (1890)." },
  { md:"01-16", kind:"Premiere", composer:"faure", title:"Fauré's Requiem", text:"His gentle Requiem was first heard at the Madeleine in Paris (1888)." },
  { md:"01-20", kind:"Marriage", composer:"debussy", title:"Debussy weds Emma", text:"Debussy married Emma Bardac (1908); their daughter Chouchou inspired Children's Corner." },
  { md:"01-27", kind:"Birthday", composer:"mozart", title:"Mozart born", text:"Wolfgang Amadeus Mozart was born in Salzburg (1756)." },
  { md:"01-28", kind:"Premiere", composer:"granados", title:"Goyescas at the Met", text:"Granados's opera premiered in New York (1916); the voyage home would cost him his life." },
  { md:"01-31", kind:"Birthday", composer:"schubert", title:"Schubert born", text:"Franz Schubert, poet of song and impromptu, was born in Vienna (1797)." },

  // ---- February ----
  { md:"02-03", kind:"Birthday", composer:"mendelssohn", title:"Mendelssohn born", text:"Felix Mendelssohn was born into a cultured Hamburg family (1809)." },
  { md:"02-24", kind:"Premiere", composer:"grieg", title:"Peer Gynt", text:"Grieg's music for Ibsen's play premiered in Christiania (Oslo) (1876)." },
  { md:"02-26", kind:"Debut", composer:"chopin", title:"Chopin's Paris debut", text:"The 22-year-old gave his first Paris concert at the Salle Pleyel (1832)." },
  { md:"02-27", kind:"Milestone", composer:"schumann", title:"Schumann's despair", text:"Schumann threw himself into the Rhine (1854); rescued, he entered an asylum for his final years." },

  // ---- March ----
  { md:"03-01", kind:"Birthday", composer:"chopin", title:"Chopin born", text:"Frédéric Chopin was born near Warsaw (1810)." },
  { md:"03-04", kind:"Premiere", composer:"tchaikovsky", title:"Swan Lake", text:"Swan Lake premiered at the Bolshoi, Moscow, to a cool reception (1877)." },
  { md:"03-05", kind:"Remembered", composer:"prokofiev", title:"Prokofiev dies", text:"He died in Moscow the very same day as Stalin (1953); the city had no flowers left for him." },
  { md:"03-07", kind:"Birthday", composer:"ravel", title:"Ravel born", text:"Maurice Ravel was born in Ciboure, near the Basque coast (1875)." },
  { md:"03-11", kind:"Milestone", composer:"mendelssohn", title:"Bach reborn", text:"The 20-year-old Mendelssohn conducted the St Matthew Passion, sparking the Bach revival (1829)." },
  { md:"03-13", kind:"Premiere", composer:"mendelssohn", title:"Violin Concerto", text:"Mendelssohn's beloved E-minor concerto premiered in Leipzig (1845)." },
  { md:"03-15", kind:"Premiere", composer:"ravel", title:"Rapsodie espagnole", text:"Ravel's shimmering Spanish orchestral suite premiered in Paris (1908)." },
  { md:"03-15", kind:"Premiere", composer:"scriabin", title:"Prometheus: Poem of Fire", text:"Scriabin premiered it in Moscow with a 'colour organ' projecting light (1911)." },
  { md:"03-21", kind:"Premiere", composer:"ravel", title:"L'Enfant et les sortilèges", text:"Ravel's magical one-act opera premiered in Monte Carlo (1925)." },
  { md:"03-24", kind:"Milestone", composer:"bach", title:"Brandenburg Concertos", text:"Bach dedicated the six concertos to the Margrave of Brandenburg (1721) — who never had them played." },
  { md:"03-24", kind:"Remembered", composer:"granados", title:"Granados drowns", text:"His ship torpedoed in the Channel, he leapt back to save his wife; both were lost (1916)." },
  { md:"03-25", kind:"Remembered", composer:"debussy", title:"Debussy dies", text:"He died in Paris as German shells fell on the city in the last year of WWI (1918)." },
  { md:"03-26", kind:"Remembered", composer:"beethoven", title:"Beethoven dies", text:"Beethoven died in Vienna during a thunderstorm (1827)." },
  { md:"03-26", kind:"Milestone", composer:"schubert", title:"Schubert's one concert", text:"He gave his only public concert — a year to the day after Beethoven's death (1828)." },
  { md:"03-28", kind:"Remembered", composer:"rachmaninoff", title:"Rachmaninoff dies", text:"He died in Beverly Hills, weeks after finally becoming a US citizen (1943)." },
  { md:"03-28", kind:"Marriage", composer:"mendelssohn", title:"Mendelssohn weds Cécile", text:"Felix married Cécile Jeanrenaud, a pastor's daughter (1837)." },
  { md:"03-31", kind:"Birthday", composer:"bach", title:"Bach born", text:"J. S. Bach was born in Eisenach (1685) — Joseph Haydn shares the day (1732)." },

  // ---- April ----
  { md:"04-01", kind:"Birthday", composer:"rachmaninoff", title:"Rachmaninoff born", text:"Sergei Rachmaninoff was born on a Russian estate (1873); his hands could span a twelfth." },
  { md:"04-03", kind:"Remembered", composer:"brahms", title:"Brahms dies", text:"Johannes Brahms died in Vienna (1897), not long after his beloved Clara Schumann." },
  { md:"04-03", kind:"Premiere", composer:"grieg", title:"Grieg's Piano Concerto", text:"His A-minor concerto — his only one — premiered in Copenhagen (1869)." },
  { md:"04-07", kind:"Premiere", composer:"beethoven", title:"Eroica", text:"Beethoven's revolutionary Third Symphony had its public premiere in Vienna (1805)." },
  { md:"04-11", kind:"Premiere", composer:"bach", title:"St Matthew Passion", text:"Bach's monumental Passion was first performed on Good Friday in Leipzig (1727)." },
  { md:"04-21", kind:"Premiere", composer:"prokofiev", title:"Classical Symphony", text:"Prokofiev premiered his witty 'Haydn done modern' symphony in Petrograd (1918)." },
  { md:"04-23", kind:"Birthday", composer:"prokofiev", title:"Prokofiev born", text:"Sergei Prokofiev was born in Ukraine (1891); he wrote his first opera at nine." },
  { md:"04-25", kind:"Milestone", composer:"liszt", title:"The Abbé Liszt", text:"The greatest showman of the piano took minor holy orders in Rome (1865)." },
  { md:"04-27", kind:"Remembered", composer:"scriabin", title:"Scriabin dies", text:"A small lip infection turned to sepsis; he died in Moscow at 43 (1915)." },
  { md:"04-29", kind:"Marriage", composer:"rachmaninoff", title:"Rachmaninoff weds Natalia", text:"He married his cousin Natalia Satina (1902), the year of his triumphant Second Concerto." },
  { md:"04-30", kind:"Premiere", composer:"debussy", title:"Pelléas et Mélisande", text:"Debussy's only completed opera premiered in Paris (1902)." },

  // ---- May ----
  { md:"05-01", kind:"Premiere", composer:"mozart", title:"The Marriage of Figaro", text:"Mozart's comic masterpiece premiered in Vienna (1786)." },
  { md:"05-02", kind:"Premiere", composer:"prokofiev", title:"Peter and the Wolf", text:"Prokofiev's musical fairy tale premiered in Moscow (1936)." },
  { md:"05-07", kind:"Birthday", composer:"brahms", title:"Brahms born", text:"Johannes Brahms was born in Hamburg (1833); as a boy he played piano in dockside taverns." },
  { md:"05-07", kind:"Birthday", composer:"tchaikovsky", title:"Tchaikovsky born", text:"Pyotr Ilyich Tchaikovsky was born in Votkinsk, Russia (1840)." },
  { md:"05-07", kind:"Premiere", composer:"beethoven", title:"The Ninth Symphony", text:"Beethoven's Ninth premiered in Vienna; stone deaf, he had to be turned to see the ovation (1824)." },
  { md:"05-12", kind:"Birthday", composer:"faure", title:"Fauré born", text:"Gabriel Fauré was born in Pamiers, in the south of France (1845)." },
  { md:"05-17", kind:"Birthday", composer:"satie", title:"Satie born", text:"Erik Satie was born in Honfleur (1866); he later ate only white foods, he claimed." },
  { md:"05-18", kind:"Premiere", composer:"satie", title:"Parade", text:"Satie's ballet with Cocteau, Picasso and Diaghilev scandalised Paris (1917)." },
  { md:"05-30", kind:"Milestone", composer:"bach", title:"Bach arrives in Leipzig", text:"He took up his post as Thomaskantor (1723) — his home for the next 27 years." },

  // ---- June ----
  { md:"06-08", kind:"Birthday", composer:"schumann", title:"Schumann born", text:"Robert Schumann was born in Zwickau (1810), a bookseller's son who nearly became a writer." },
  { md:"06-11", kind:"Marriage", composer:"grieg", title:"Grieg weds Nina", text:"Edvard married his cousin, the singer Nina Hagerup (1867)." },
  { md:"06-15", kind:"Birthday", composer:"grieg", title:"Grieg born", text:"Edvard Grieg was born in Bergen, Norway (1843)." },

  // ---- July ----
  { md:"07-01", kind:"Remembered", composer:"satie", title:"Satie dies", text:"After his death, friends opened his room — untouched by any visitor for 27 years (1925)." },
  { md:"07-06", kind:"Milestone", composer:"beethoven", title:"The Immortal Beloved", text:"Beethoven wrote his ardent letter to an unnamed 'Immortal Beloved' (1812); her name is still a mystery." },
  { md:"07-18", kind:"Marriage", composer:"tchaikovsky", title:"A doomed marriage", text:"Tchaikovsky married Antonina Milyukova (1877); the union collapsed within weeks." },
  { md:"07-23", kind:"Remembered", composer:"scarlatti", title:"Scarlatti dies", text:"Domenico Scarlatti died in Madrid (1757), his adopted Spanish home." },
  { md:"07-27", kind:"Birthday", composer:"granados", title:"Granados born", text:"Enrique Granados was born in Lleida, Spain (1867)." },
  { md:"07-28", kind:"Remembered", composer:"bach", title:"Bach dies", text:"Johann Sebastian Bach died in Leipzig, nearly blind, at 65 (1750)." },
  { md:"07-29", kind:"Remembered", composer:"schumann", title:"Schumann dies", text:"Robert Schumann died in an asylum near Bonn (1856); Clara and Brahms were near." },
  { md:"07-31", kind:"Remembered", composer:"liszt", title:"Liszt dies", text:"Franz Liszt died in Bayreuth, at the festival of his son-in-law Wagner (1886)." },

  // ---- August ----
  { md:"08-04", kind:"Marriage", composer:"mozart", title:"Mozart weds Constanze", text:"Against his father's wishes, Mozart married Constanze Weber in Vienna (1782)." },
  { md:"08-22", kind:"Birthday", composer:"debussy", title:"Debussy born", text:"Claude Debussy was born in Saint-Germain-en-Laye (1862)." },
  { md:"08-28", kind:"Premiere", composer:"liszt", title:"Wagner's Lohengrin", text:"Liszt conducted the premiere at Weimar while Wagner was in political exile (1850)." },

  // ---- September ----
  { md:"09-04", kind:"Remembered", composer:"grieg", title:"Grieg dies", text:"Edvard Grieg died in Bergen (1907); tens of thousands lined the streets." },
  { md:"09-10", kind:"Premiere", composer:"bach", title:"Cantata BWV 78", text:"Bach's 'Jesu, der du meine Seele' was first performed in Leipzig under his own direction (1724)." },
  { md:"09-12", kind:"Marriage", composer:"schumann", title:"Robert weds Clara", text:"After a bitter court fight with her father, Schumann married Clara Wieck (1840)." },
  { md:"09-30", kind:"Premiere", composer:"mozart", title:"The Magic Flute", text:"Mozart's fairy-tale opera premiered in Vienna, just weeks before his death (1791)." },

  // ---- October ----
  { md:"10-06", kind:"Milestone", composer:"beethoven", title:"Heiligenstadt Testament", text:"Facing deafness, Beethoven wrote a despairing letter to his brothers — then resolved to live for his art (1802)." },
  { md:"10-13", kind:"Milestone", composer:"mozart", title:"Mozart at Schönbrunn", text:"The 6-year-old played for the Empress and, legend says, proposed to little Marie Antoinette (1762)." },
  { md:"10-15", kind:"Premiere", composer:"debussy", title:"La Mer", text:"Debussy's great symphonic seascape premiered in Paris (1905)." },
  { md:"10-17", kind:"Remembered", composer:"chopin", title:"Chopin dies", text:"Chopin died in Paris at just 39 (1849); his heart was later smuggled to Warsaw." },
  { md:"10-17", kind:"Marriage", composer:"bach", title:"Bach's first marriage", text:"Bach married his second cousin Maria Barbara Bach (1707)." },
  { md:"10-22", kind:"Birthday", composer:"liszt", title:"Liszt born", text:"Franz Liszt was born in Raiding, Hungary (1811) — the first true piano superstar." },
  { md:"10-25", kind:"Premiere", composer:"tchaikovsky", title:"Piano Concerto No. 1", text:"His thunderous B-flat-minor concerto premiered — in Boston, not Russia (1875)." },
  { md:"10-26", kind:"Birthday", composer:"scarlatti", title:"Scarlatti born", text:"Domenico Scarlatti was born in Naples (1685), the same year as Bach and Handel." },
  { md:"10-28", kind:"Premiere", composer:"tchaikovsky", title:"Pathétique", text:"Tchaikovsky conducted his Sixth Symphony just nine days before his death (1893)." },
  { md:"10-28", kind:"Milestone", composer:"schumann", title:"Schumann hails Brahms", text:"His essay 'Neue Bahnen' proclaimed the unknown 20-year-old Brahms a genius (1853)." },
  { md:"10-29", kind:"Premiere", composer:"mozart", title:"Don Giovanni", text:"Mozart's dark comedy premiered in Prague (1787); the overture was written the night before." },
  { md:"10-30", kind:"Remembered", composer:"chopin", title:"Chopin's funeral", text:"Mozart's Requiem was sung at the Madeleine; thousands filled the Paris streets (1849)." },

  // ---- November ----
  { md:"11-02", kind:"Milestone", composer:"chopin", title:"Chopin leaves Warsaw", text:"He left Poland forever (1830); weeks later the November Uprising broke out." },
  { md:"11-04", kind:"Remembered", composer:"mendelssohn", title:"Mendelssohn dies", text:"Felix Mendelssohn died in Leipzig at 38 (1847), months after his sister Fanny." },
  { md:"11-04", kind:"Remembered", composer:"faure", title:"Fauré dies", text:"Gabriel Fauré died in Paris (1924); like Beethoven, he spent his last years going deaf." },
  { md:"11-04", kind:"Premiere", composer:"brahms", title:"Brahms's First Symphony", text:"Premiered at last after some twenty years of doubt and revision (1876)." },
  { md:"11-06", kind:"Remembered", composer:"tchaikovsky", title:"Tchaikovsky dies", text:"He died in St Petersburg days after the Pathétique premiere (1893); the cause is still argued." },
  { md:"11-07", kind:"Premiere", composer:"rachmaninoff", title:"Rhapsody on a Theme of Paganini", text:"Rachmaninoff premiered it in Baltimore, himself at the piano (1934)." },
  { md:"11-09", kind:"Premiere", composer:"rachmaninoff", title:"Piano Concerto No. 2", text:"The concerto that lifted him from depression premiered in Moscow (1901)." },
  { md:"11-16", kind:"Milestone", composer:"chopin", title:"Chopin's last concert", text:"Gravely ill, he gave his final public concert in London for Polish refugees (1848)." },
  { md:"11-19", kind:"Remembered", composer:"schubert", title:"Schubert dies", text:"Franz Schubert died in Vienna at just 31 (1828), leaving symphonies unheard for decades." },
  { md:"11-20", kind:"Premiere", composer:"beethoven", title:"Fidelio", text:"Beethoven's only opera premiered to a near-empty, French-occupied Vienna (1805)." },
  { md:"11-22", kind:"Premiere", composer:"ravel", title:"Boléro", text:"Ravel's hypnotic one-crescendo experiment premiered at the Paris Opéra (1928)." },
  { md:"11-28", kind:"Premiere", composer:"rachmaninoff", title:"Piano Concerto No. 3", text:"The towering 'Rach 3' premiered in New York (1909)." },

  // ---- December ----
  { md:"12-02", kind:"Milestone", composer:"bach", title:"Bach in jail", text:"Released after nearly a month locked up for pushing too hard to quit his Weimar post (1717)." },
  { md:"12-03", kind:"Marriage", composer:"bach", title:"Bach weds Anna Magdalena", text:"He married the young singer Anna Magdalena (1721), who would copy out many of his scores." },
  { md:"12-05", kind:"Remembered", composer:"mozart", title:"Mozart dies", text:"Mozart died in Vienna at 35 (1791), his Requiem left unfinished." },
  { md:"12-10", kind:"Premiere", composer:"scriabin", title:"The Poem of Ecstasy", text:"Scriabin's orchestral rapture premiered in New York (1908)." },
  { md:"12-16", kind:"Birthday", composer:"beethoven", title:"Beethoven born", text:"Ludwig van Beethoven was born in Bonn (baptised 17 Dec 1770)." },
  { md:"12-16", kind:"Premiere", composer:"prokofiev", title:"Piano Concerto No. 3", text:"Prokofiev premiered his brilliant, steely Third in Chicago (1921)." },
  { md:"12-18", kind:"Premiere", composer:"tchaikovsky", title:"The Nutcracker", text:"The Nutcracker premiered in St Petersburg on a double bill (1892)." },
  { md:"12-22", kind:"Premiere", composer:"debussy", title:"Prélude à l'après-midi d'un faune", text:"The piece often said to begin modern music premiered in Paris (1894)." },
  { md:"12-22", kind:"Premiere", composer:"beethoven", title:"Fifth & Sixth Symphonies", text:"Beethoven premiered both in one freezing four-hour concert (1808)." },
  { md:"12-25", kind:"Premiere", composer:"bach", title:"Christmas Oratorio", text:"Its first part was first heard in Leipzig on Christmas Day (1734)." },
  { md:"12-28", kind:"Remembered", composer:"ravel", title:"Ravel dies", text:"He died in Paris after surgery for a mysterious brain ailment (1937)." }
];
