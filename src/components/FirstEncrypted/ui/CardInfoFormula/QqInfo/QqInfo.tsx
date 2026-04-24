import { useResponsive } from "@/hooks/useResponsive";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function QqInfo() {
  const { isDesktop } = useResponsive();

  return (
    <div>
      <Title
        level={isDesktop ? 2 : 3}
        style={{
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        "P-CRYPT" algoritmi
      </Title>
      <Paragraph>
        Bul algoritm tekstti shifrlaw ushın arnalǵan bolıp, ol hárbir háripti óz
        aldına qayta islew tiykarında isleydi. Algoritmde alfavit{" "}
        <Text strong>M</Text> háripten ibarat dep alınadı hám barlıq esaplawlar{" "}
        <Text strong>M</Text> modul boyınsha ámelge asırıladı. Shifrlaw procesi
        tómendegi formula tiykarında orınlanadı:
      </Paragraph>
      <div>
        <Paragraph strong>
          E<sub>i</sub> = (x<sub>i</sub> + i + K)modM
        </Paragraph>
        <Paragraph strong>
          D<sub>i</sub> = (y<sub>i</sub> - (i + K))modM
        </Paragraph>
      </div>
      <Divider />
      <div
        style={{
          paddingLeft: 20,
        }}
      >
        <Paragraph>Bul jerde:</Paragraph>
        <Paragraph>
          <Text strong>E</Text>
          <sub>i</sub> - shifrlanǵan háriptiń alfavittegi tártip nomeri;
        </Paragraph>
        <Paragraph>
          <Text strong>x</Text>
          <sub>i</sub> - ashıq teksttegi háriptiń alfavittegi tártip nomeri;
        </Paragraph>
        <Paragraph>
          <Text strong>i</Text> - háriptiń sóz ishindegi tártip nomeri;
        </Paragraph>
        <Paragraph>
          <Text strong>K</Text> - bul shifrlaw gilti, ol aldınnan kelisilgen
          pútin san mánisi;
        </Paragraph>
        <Paragraph>
          <Text strong>M</Text> - alfavittegi háripler sanı.
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Paragraph>
          Algoritm islew procesinde ashıq teksttegi hárbir hárip alfavittegi
          jaylasıwına qaray sanǵa aylandırıladı, oǵan sáykes túrde háriptiń
          jaylasıw indeksi hám gilt mánisi qosıladı. Payda bolǵan nátiyje{" "}
          <Text strong>M</Text> ǵa bólingen haldaǵı qaldıq arqalı jańa hárip
          anıqlanadı. Usi tárizde ashıq tekst shifrlanǵan tekstke aylandırıladı.
        </Paragraph>
        <Paragraph>
          Bul jantasıw ápiwayı Cezar tipindegi shifrlawdan parıqlı túrde, hár
          bir hárip ushın hár túrli jiljıw mánisin payda etedi. Bul, shifrlanǵan
          teksttiń qáwipsizlik dárejesin salıstırmalı túrde arttıradı hám
          tákirarlanıwshı shablonlardi azaytadı. Bul algoritmniń áhmiyetli
          táreplerinen biri, birdey háripler túrli poziciyalarda jaylasqan
          bolsa, olardıń shifrlangan kórinisi de túrlishe boladı. Máselen, ashıq
          tekstte tákirarlanǵan birdey hárip hár túrli orınlarda turǵanlıǵı
          sebepli hár saparı basqasha nátiyje payda etedi. Bul funkciya jiyilik
          analizine tiykarlanǵan ápiwayı kriptoanaliz usıllarına qarsı belgili
          dárejede qorǵanıwdı támiyinleydi. Algoritmniń jáne bir ústinligi, ol
          esaplawlarda ápiwayı, programmalıq támiynatta tez hám nátiyjeli
          isleydi. Bul shifrlaw usılı tiykarınan oqıw proceslerinde,
          algoritmlerdi túsindiriwde hám ápiwayı informaciyalardı jasırıw talap
          etilgen jaǵdaylarda paydalanıw ushın qolaylı esaplanadı.
        </Paragraph>
      </div>
    </div>
  );
}

export default QqInfo;
