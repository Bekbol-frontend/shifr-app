import { useResponsive } from "@/hooks/useResponsive";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function EnInfo() {
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
        "P-CRYPT" algorithm
      </Title>
      <Paragraph>
        This algorithm is designed for text encryption and operates on the basis
        of processing each letter separately. In the algorithm, it is assumed
        that the alphabet consists of <Text strong>M</Text> letters, and all
        calculations are performed according to module <Text strong>M</Text>.
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
        <Paragraph strong>
          The encryption process is performed according to the following
          formula:
        </Paragraph>
        <Paragraph>
          <Text strong>E</Text>
          <sub>i</sub> - the alphabetical sequence number of the encrypted
          letter;
        </Paragraph>
        <Paragraph>
          <Text strong>x</Text>
          <sub>i</sub> - the alphabetical sequence number of a letter in
          plaintext;
        </Paragraph>
        <Paragraph>
          <Text strong>i</Text> - the sequence number of the letter within a
          word;
        </Paragraph>
        <Paragraph>
          <Text strong>K</Text> - the encryption key, which is a pre-agreed
          integer value;
        </Paragraph>
        <Paragraph>
          <Text strong>M</Text> - the number of letters in the alphabet
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Paragraph>
          During the algorithm's operation, each letter in the plaintext is
          converted into a number, to which the location index of the letter and
          the key value are added accordingly. The resulting result is
          determined by the remainder, divided by <Text>M</Text>. Thus,
          plaintext is converted into encrypted text.
        </Paragraph>
        <Paragraph>
          This approach, unlike conventional Caesar-type encryption, generates a
          different shift value for each letter. This relatively increases the
          security level of the encrypted text and reduces repetitive patterns.
          One of the important aspects of this algorithm is that if the same
          letters are located in different positions, their encrypted appearance
          will also be different. For example, in plaintext, the same letter is
          repeated in different places, resulting in a different result each
          time. This feature provides a certain degree of protection against
          conventional cryptanalysis methods based on frequency analysis.
          Another advantage of the algorithm is that it is simple in terms of
          calculation and works quickly and efficiently in software.
        </Paragraph>
      </div>
    </div>
  );
}

export default EnInfo;
