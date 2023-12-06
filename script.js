const list = [
    {
        name: "Guitar",
        image: "./assets/img/guitar-product.png",
        price: 1050000,
        hyperlink: "./Instrument-Story/guitar.html",
        function: showGuitarHistory(),
    },

    {
        name: "Piano",
        image: "./assets/img/piano-product.png",
        price: 6535000,
        hyperlink: "./Instrument-Story/piano.html",
        function: showPianoHistory(),
    },

    {
        name: "Ukulele",
        image: "./assets/img/ukulele-product.png",
        price: 750000,
        hyperlink: "./Instrument-Story/ukulele.html",
        function: showUkuleleHistory(),
    },

    {
        name: "Violin",
        image: "./assets/img/violin-product.png",
        price: 1050000,
        hyperlink: "./Instrument-Story/violin.html",
        function: showViolinHistory(),
    },

    {
        name: "Guitar",
        image: "./assets/img/guitar-product.png",
        price: 1050000,
        hyperlink: "./Instrument-Story/guitar.html",
        function: showGuitarHistory(),
    },

    {
        name: "Piano",
        image: "./assets/img/piano-product.png",
        price: 6535000,
        hyperlink: "./Instrument-Story/piano.html",
        function: showPianoHistory(),
    },

    {
        name: "Ukulele",
        image: "./assets/img/ukulele-product.png",
        price: 750000,
        hyperlink: "./Instrument-Story/ukulele.html",
        function: showUkuleleHistory(),
    },

    {
        name: "Violin",
        image: "./assets/img/violin-product.png",
        price: 1050000,
        hyperlink: "./Instrument-Story/violin.html",
        function: showViolinHistory(),
    },
];

document.addEventListener("DOMContentLoaded", function () {
    let throttleScroll;
    window.addEventListener("scroll", function () {
        if (!throttleScroll) {
            throttleScroll = setTimeout(function () {
                throttleScroll = null;
            }, 200);
        }
    });

    var string = "";

    {
        //slider -> done
        string = "";
        document.getElementById("slider").innerHTML = "";
        let tempList = filterUniqueListName();
        for (let i = 0; i < tempList.length; i++) {
            let instrument = tempList[i];
            string += `<a href="${instrument.hyperlink}" onclick=${instrument.function}><img width="100" src="${instrument.image}" alt="${instrument.name}"></a>`;
        }
        document.getElementById("slider").innerHTML += string;
    }

    {
        //product-list -> done
        string = "";
        document.getElementById("product-list").innerHTML = "";
        for (let i = 0; i < list.length; i++) {
            let instrument = list[i];
            string += `<div class="d-flex flex-column text-center border border-2 my-2 mx-3 p-3">
                        <div>
                            <h4>
                                <b>${instrument.name}</b>
                            </h4>
                        </div>

                        <div class="d-flex justify-content-center align-items-center" style="flex:10">
                            <img width="200" height="200" src="${instrument.image}" alt="${instrument.name}"
                                class="img-fluid" />
                        </div>

                        <div>
                            <p>
                                Đơn giá:
                                <b class="text-danger">${formatCurrencyVND(instrument.price)}</b>
                            </p>
                        </div>

                        <div>
                            <button type="submit" class="buyButton">
                                <i class="fa fa-shopping-cart"></i>
                                ĐẶT MUA
                            </button>
                        </div>
                    </div>`;
        }
        document.getElementById("product-list").innerHTML = string;
    }

    {
        //autoRunImg -> done
        string = "";
        document.getElementById("autoRunImg").innerHTML = "";
        let tempList = filterUniqueListName();
        for (let i = 0; i < tempList.length; i++) {
            let instrument = tempList[i];
            string += ` <marquee direction="up" scrollamount="5" scrolldelay="30" onmousemove="stop()" onmouseout="start()">
                    <a href="#">
                        <img height="100" width="100" src="${instrument.image}" />
                        <p class="text-center">${instrument.name}</p>
                    </a>
                </marquee>`;
        }
        document.getElementById("autoRunImg").innerHTML = string;
    }

    {
        //dropdown-instrument -> done
        string = "";
        document.getElementById("dropdown-instrument").innerHTML = "";
        let tempList = filterUniqueListName();
        for (let i = 0; i < tempList.length; i++) {
            let instrument = tempList[i];
            string += `<li>
                            <a class="dropdown-item" href="${instrument.hyperlink}">${instrument.name}</a>
                        </li>`;
        }
        document.getElementById("dropdown-instrument").innerHTML = string;
    }
});

function load() {
    {
        //autoRunImg -> done
        string = "";
        document.getElementById("autoRunImg").innerHTML = "";
        let tempList = filterUniqueListName();
        for (let i = 0; i < tempList.length; i++) {
            let instrument = tempList[i];
            string += ` <marquee direction="up" scrollamount="5" scrolldelay="30" onmousemove="stop()" onmouseout="start()">
                    <a href="#">
                        <img height="100" width="100" src="${instrument.image}" />
                        <p class="text-center">${instrument.name}</p>
                    </a>
                </marquee>`;
        }
        document.getElementById("autoRunImg").innerHTML = string;
    }

    {
        //dropdown-instrument -> done
        string = "";
        document.getElementById("dropdown-instrument").innerHTML = "";
        let tempList = filterUniqueListName();
        for (let i = 0; i < tempList.length; i++) {
            let instrument = tempList[i];
            string += `<li>
                            <a class="dropdown-item" href="${instrument.hyperlink}">${instrument.name}</a>
                        </li>`;
        }
        document.getElementById("dropdown-instrument").innerHTML = string;
    }
}

function filterUniqueListName() {
    let tempList = [];
    for (let i = 0; i < list.length; i++) {
        let check = list[i].name;
        if (!tempList.some(item => item.name === check)) {
            tempList.push(list[i]);
        }
    }
    return tempList;
}

function formatCurrencyVND(number) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(number);
}

function checkError(input) {
    var errorMessage = input.nextElementSibling;
    var inputValue = input.value.trim();
    if (inputValue === "") {
        errorMessage.style.display = "inline";
    } else {
        errorMessage.style.display = "none";
    }
}

function checkPassError(input) {
    var errorMessage = input.nextElementSibling;
    var inputValue = input.value.trim();

    if (inputValue === "" || inputValue.length <= 5) {
        errorMessage.style.display = "inline";
    } else {
        errorMessage.style.display = "none";
    }
}

function checkConfirmPassError(input) {
    var errorMessage = input.nextElementSibling;
    let password = document.forms["register form"]["password"].value.trim();
    let comfirmPassword = input.value.trim();
    if (comfirmPassword !== password) {
        errorMessage.style.display = "inline";
    } else {
        errorMessage.style.display = "none";
    }
}

function showPianoHistory() {
    let string = `<div>
    <div class="text-center py-3" style="text-transform: uppercase; text-decoration: underline">
        <h1><strong>History of the Piano</strong></h1>
    </div>

    <div class="px-5">
        <div>
            <h3>
                <b>1. Harpsichord and Clavichord (predecessors):</b>
            </h3>
            <div class="px-5">
                <p>
                    Before the invention of the piano, there were keyboard
                    instruments like the harpsichord and clavichord. These
                    instruments produced sound by plucking strings (harpsichord)
                    or striking them with small metal blades (clavichord).
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>2. Bartolomeo Cristofori's Invention (Early 18th
                    Century):</b>
            </h3>
            <div class="px-5">
                <p>
                    The piano was invented by Bartolomeo Cristofori, an Italian
                    instrument maker, around the year 1700. Cristofori's early
                    pianos were known as "gravicembalo col piano e forte,"
                    allowing volume control based on key strike force.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>3. Spread and Evolution in the 18th Century:</b>
            </h3>
            <div class="px-5">
                <p>
                    The piano gained popularity in the 18th century, with
                    builders like Johann Andreas Stein contributing to its
                    evolution. The range expanded, and structural and tonal
                    refinements occurred.
                </p>
            </div>
        </div>

        <div>
            <h3><b>4. 19th Century Innovations:</b></h3>
            <div class="px-5">
                <p>
                    The 19th century saw significant improvements in piano
                    design with metal frames and cross-stringing. The instrument
                    became a staple in classical and popular music.
                </p>
            </div>
        </div>

        <div>
            <h3><b>5. Rise of Piano Manufacturing:</b></h3>
            <div>
                <p>
                    Piano manufacturing became a significant industry in the
                    19th century, producing various styles like grand and
                    upright pianos.
                </p>
            </div>
        </div>

        <div>
            <h3><b>6. 20th Century and Beyond:</b></h3>
            <div>
                <p>
                    The 20th century brought further refinements, including
                    electric and digital pianos with new possibilities in sound
                    and portability. The piano remains a central instrument in
                    various music genres.
                </p>
            </div>
        </div>
    </div>
</div>`;
}

function showGuitarHistory() {
    let string = `<div>
    <div class="text-center py-3" style="text-transform: uppercase; text-decoration: underline">
        <h1><strong>History of the Guitar</strong></h1>
    </div>

    <div class="px-5">
        <div>
            <h3>
                <b>1. Ancient and Early Stringed Instruments:</b>
            </h3>
            <div class="px-5">
                <p>
                    The guitar's origins can be traced back to ancient stringed
                    instruments such as the lute and oud. These early
                    instruments had a rounded body and a varying number of
                    strings.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>2. Renaissance and Baroque Guitar:</b>
            </h3>
            <div class="px-5">
                <p>
                    During the Renaissance, the guitar evolved with the addition
                    of frets and a standardized number of strings. In the
                    Baroque era, the guitar gained popularity as a solo
                    instrument, and notable composers wrote music specifically
                    for it.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>3. Classical Guitar:</b>
            </h3>
            <div class="px-5">
                <p>
                    In the 19th century, Antonio Torres developed the design of
                    the classical guitar, introducing features like the
                    fan-bracing system. The classical guitar became a standard
                    instrument in classical music, known for its nylon strings
                    and distinctive sound.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>4. Steel-String Acoustic Guitar:</b>
            </h3>
            <div class="px-5">
                <p>
                    In the late 19th and early 20th centuries, the steel-string
                    acoustic guitar gained popularity, especially in folk,
                    blues, and country music. Companies like Martin and Gibson
                    played a crucial role in popularizing the steel-string
                    guitar.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>5. Electric Guitar:</b>
            </h3>
            <div class="px-5">
                <p>
                    The invention of the electric guitar in the 1930s, notably
                    by pioneers like Adolph Rickenbacker and Les Paul,
                    revolutionized music. The electric guitar's ability to
                    produce amplified sound led to the emergence of rock and
                    roll and various other genres.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>6. Solid-Body Electric Guitars and Innovation:</b>
            </h3>
            <div class="px-5">
                <p>
                    Leo Fender's Telecaster and Stratocaster, as well as
                    Gibson's Les Paul, are iconic solid-body electric guitars
                    that shaped the sound of modern music. Innovations like the
                    whammy bar and the introduction of various pickups further
                    expanded the possibilities of the electric guitar.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>7. Contemporary and Specialized Guitars:</b>
            </h3>
            <div class="px-5">
                <p>
                    Today, there is a wide variety of guitars, including bass
                    guitars, 7-string guitars, and various specialized
                    instruments. Guitars are central to virtually every genre of
                    music, from classical to rock, jazz, blues, and beyond.
                </p>
            </div>
        </div>
    </div>
</div>`;
}

function showUkuleleHistory() {
    let string = `<div>
    <div class="text-center py-3" style="text-transform: uppercase; text-decoration: underline">
        <h1><strong>History of the Ukulele</strong></h1>
    </div>

    <div class="px-5">
        <div>
            <h3>
                <b>1. Origin in Portugal:</b>
            </h3>
            <div class="px-5">
                <p>
                    The ukulele's roots can be traced back to a small
                    guitar-like instrument called the machete brought to Hawaii
                    by Portuguese immigrants in the 19th century.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>2. Hawaiian Adaptation:</b>
            </h3>
            <div class="px-5">
                <p>
                    Hawaiians embraced the machete, and it underwent
                    adaptations, including changes to its size, shape, and the
                    addition of gut strings. The name "ukulele" roughly
                    translates to "jumping flea" in Hawaiian, possibly referring
                    to the quick finger movements of players.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>3. Popularity in Hawaii:</b>
            </h3>
            <div class="px-5">
                <p>
                    The ukulele gained popularity in Hawaii during the late 19th
                    and early 20th centuries. It became an integral part of
                    traditional Hawaiian music and cultural expression.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>4. Introduction to the Mainland U.S.:</b>
            </h3>
            <div class="px-5">
                <p>
                    The Panama-Pacific International Exposition in 1915 in San
                    Francisco introduced the ukulele to the mainland United
                    States. Its unique sound and portability contributed to its
                    quick rise in popularity.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>5. Jazz Age and Tin Pan Alley:</b>
            </h3>
            <div class="px-5">
                <p>
                    The ukulele became a significant instrument during the Jazz
                    Age, featuring in many popular songs from Tin Pan Alley. Its
                    accessibility and relatively simple playability made it a
                    favorite for amateur musicians.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>6. World War II and Decline:</b>
            </h3>
            <div class="px-5">
                <p>
                    During World War II, ukulele sales declined as resources
                    were redirected for the war effort. However, it experienced
                    a resurgence in popularity after the war.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>7. Renewed Interest and Diverse Styles:</b>
            </h3>
            <div class="px-5">
                <p>
                    In the late 20th century and early 21st century, the ukulele
                    experienced a renaissance. Artists like Israel
                    Kamakawiwo'ole and Jake Shimabukuro gained international
                    acclaim, showcasing the ukulele's versatility in various
                    genres.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>8. Contemporary Popularity:</b>
            </h3>
            <div class="px-5">
                <p>
                    The ukulele has become a popular instrument for players of
                    all ages, with communities and festivals dedicated to its
                    celebration worldwide. Its appeal spans diverse musical
                    genres, from traditional Hawaiian music to pop, rock, and
                    folk.
                </p>
            </div>
        </div>
    </div>
</div>`;
}

function showViolinHistory() {
    let string = `<div>
    <div class="text-center py-3" style="text-transform: uppercase; text-decoration: underline">
        <h1><strong>History of the Violin</strong></h1>
    </div>

    <div class="px-5">
        <div>
            <h3>
                <b>1. Early Stringed Instruments:</b>
            </h3>
            <div class="px-5">
                <p>
                    The history of the violin can be traced back to early
                    stringed instruments like the rebec and medieval fiddle.
                    These instruments laid the foundation for the development of
                    the violin family.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>2. Cremonese Makers - Stradivari and Guarneri:</b>
            </h3>
            <div class="px-5">
                <p>
                    The craft of violin making saw significant advancements in
                    the 16th and 17th centuries in Cremona, Italy. Antonio
                    Stradivari and Giuseppe Guarneri, renowned Cremonese makers,
                    created some of the finest violins, influencing the
                    instrument's design and tonal qualities.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>3. Standardization of the Violin Design:</b>
            </h3>
            <div class="px-5">
                <p>
                    Stradivari's and Guarneri's violins set the standard for the
                    modern violin design, including the iconic shape, size, and
                    the use of spruce and maple for the body. These
                    characteristics became the blueprint for violin makers
                    across generations.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>4. Spread Across Europe:</b>
            </h3>
            <div class="px-5">
                <p>
                    The violin gained popularity across Europe, becoming a key
                    instrument in classical music. It found a place in
                    orchestras and chamber ensembles, contributing to the
                    development of classical music repertoire.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>5. Baroque and Classical Periods:</b>
            </h3>
            <div class="px-5">
                <p>
                    During the Baroque and Classical periods, the violin played
                    a central role in the works of composers like Vivaldi, Bach,
                    Mozart, and Beethoven. The instrument's versatility and
                    expressive capabilities made it indispensable in various
                    musical genres.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>6. Romantic Era and Virtuoso Performers:</b>
            </h3>
            <div class="px-5">
                <p>
                    The Romantic era saw the rise of virtuoso violinists such as
                    Niccolò Paganini and composers like Brahms and Tchaikovsky,
                    who expanded the violin repertoire with technically
                    demanding pieces.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>7. 20th Century and Beyond:</b>
            </h3>
            <div class="px-5">
                <p>
                    The violin continued to evolve in the 20th century, with the
                    emergence of new playing styles and genres. Electric violins
                    and experimental compositions expanded the possibilities of
                    the instrument.
                </p>
            </div>
        </div>

        <div>
            <h3>
                <b>8. Contemporary Role:</b>
            </h3>
            <div class="px-5">
                <p>
                    Today, the violin remains a versatile and widely played
                    instrument, found in classical, jazz, folk, and popular
                    music. It continues to inspire new generations of musicians
                    and audiences worldwide.
                </p>
            </div>
        </div>
    </div>
</div>`;
}