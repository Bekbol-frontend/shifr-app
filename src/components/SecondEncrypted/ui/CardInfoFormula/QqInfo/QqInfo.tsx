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
        COUPLE ALGORITMI
      </Title>
      <Paragraph>
        Bul algoritm tekstti shifrlaw ushın arnalǵan bolıp, ol hárbir háripti óz
        aldına qayta islew tiykarında isleydi. Algoritmde alfavit{" "}
        <Text strong>M</Text> háripten ibarat dep alınadı hám barlıq esaplawlar{" "}
        <Text strong>mod M</Text> boyınsha ámelge asırıladı. Shifrlaw procesi
        tómendegi formula tiykarında orınlanadı:
      </Paragraph>
      <div>
        <Paragraph strong>
          E<sub>i</sub> = (x<sub>i</sub> + (-1)<sup>i+1</sup> * k)modM
        </Paragraph>
        <Paragraph strong>
          D<sub>i</sub> = (y<sub>i</sub> - (-1)<sup>i+1</sup> * k)modM
        </Paragraph>
      </div>
      <Divider />
      <div
        style={{
          paddingLeft: 20,
        }}
      >
        <Paragraph strong>Bul jerde:</Paragraph>
        <Paragraph>
          <Text strong>E</Text>
          <sub>i</sub> - shifrlanǵan háriptiń alfavittegi tártip nomeri
          esaplanadı;
        </Paragraph>
        <Paragraph>
          <Text strong>x</Text>
          <sub>i</sub> - ashıq teksttegi háriptiń alfavittegi tártip nomeri
          bolıp;
        </Paragraph>
        <Paragraph>
          <Text strong>i</Text> - háriptiń sóz ishindegi jaylasıw tártip nomeri;
        </Paragraph>
        <Paragraph>
          <Text strong>K</Text> - bul aldınnan kelisilgen pútin sanlı mánis
          bolgan shifrlaw gilti;
        </Paragraph>
        <Paragraph>
          <Text strong>M</Text> - sol alfavittegi háripler sanı.
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Paragraph>
          Algoritm islew procesinde ashıq teksttegi hárbir hárip alfavittegi
          jaylasıwına qaray sanǵa aylandırıladı, oǵan sáykes túrde háriptiń
          jaylasıw ornına qaray gilt mánisi qosıladı yamasa alınadı. Payda
          bolǵan nátiyje <Text strong>M</Text> ǵa bólingen haldaǵı qaldıq arqalı
          jańa hárip anıqlanadı. Usinday etip ashıq tekst shifrlanǵan tekstke
          aylandırıladı.
        </Paragraph>
        <Paragraph>
          Bul jantasıw ápiwayı Cezar tipindegi shifrlawdan parıqlı túrde, hár
          bir hárip ushın hár túrli jiljıw mánisin payda etedi. Jáne bir tárepi,
          Cezar algoritminde bir háripti deshifrlasa sol hárip neshe márte
          qaytalansa sonsha hárip birden tabılar edi. Al bunday jaǵdayda taq hám
          juplıǵına qaray ózgergeni ushın hár hárip penen bólek-bólek islesiw
          kerek boladı hám bul bolsa shifrlanǵan teksttiń qáwipsizlik dárejesin
          salıstırmalı túrde arttıradı hám tákirarlanatuģın shablonlar sanın
          kemeytedi. Máselen, ashıq tekstte tákirarlanǵan birdey hárip hár túrli
          orınlarda turǵanlıǵı sebepli hár saparı basqasha nátiyje payda etedi.
          Bul qásiyet jiyilik analizine tiykarlanǵan ápiwayı kriptoanaliz
          usıllarına qarsı belgili dárejede qorǵanıwdı támiyinleydi.
        </Paragraph>
      </div>
    </div>
  );
}

export default QqInfo;
