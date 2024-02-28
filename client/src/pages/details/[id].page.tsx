import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { useFetchInfoDetail } from 'src/utils/fetchinfo';
import { userAtom } from '../../atoms/user';
import styles from './index.module.css';

const DetailPage = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const { id } = router.query; // URLからidを取得

  const fetchinfodetail = useFetchInfoDetail();

  ///
  const [tags, setTags] = useState(['Python', 'Apache', 'AWS', 'Docker', 'GCP', 'フリーテキスト']);
  const [title, setTitle] = useState(
    `【速攻退職OK】 株式会社ほげんぽつ  バックエンドエンジニア募集`
  );
  const [salary, setSalary] = useState('バックエンドエンジニア 600万円~1,000万円');
  const [description, setDescription] = useState(
    '私たち「ほげんぽつ」は、2005年の設立以来、テクノロジーの力を活用して、企業や個人が直面する課題を解決するソリューションを提供してきました。特に、クラウドコンピューティング、AI、IoTの分野での実績が豊富であり、多くのクライアントから信頼を得ています。私たちのモットーは「技術で世界を変える」。日々進化するテクノロジーを駆使し、社会や人々の生活をより良くするための新しい価値を創出しています。経験豊富なエンジニアと専門家たちがチームを組み、お客様のニーズに応じた最適なソリューションを提案します。未来を共に切り開くパートナーとして、テックワールドをご信頼ください。'
  );

  const [subDescription, setSubDescription] = useState('がんばりましゅ');

  const [requirements, setRequirements] = useState({
    職種: 'バックエンドエンジニア',
    必須スキル: 'Python, Django, RESTful APIの経験',
    歓迎スキル: 'クラウドサービスの経験（AWS, GCPなど）',
    勤務地: '東京都渋谷区',
    給与: '月給 30万~50万円',
    勤務時間: '9:00~18:00（フレックスタイム制）',
    福利厚生: '健康保険完備、定期健康診断、スキルアップ研修制度',
  });
  ///

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (id) {
      // id が存在する場合のみ FetchInfoDetail を実行
      FetchInfoDetail(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // id が変更されるたびに効果を再実行

  const FetchInfoDetail = async (companyId: number) => {
    const fetchInfo = await fetchinfodetail(companyId);
    setTitle(fetchInfo.body.companyName);
    console.log(fetchInfo);
  };

  return (
    <div>
      <BasicHeader user={user} />
      <Container
        maxWidth="lg"
        className={styles.container}
        sx={{
          pt: 32,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          {salary}
        </Typography>
        <Box display="flex" gap={1} m={3}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" color="primary" />
          ))}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box padding={2}>
                <Typography fontSize={17} lineHeight={2.1}>
                  {description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box padding={2}>
                <img src="/images/companyImage.jpg" width={530} height={300} alt="logo" />
              </Box>
              <Paper elevation={3}>
                <Box padding={2}>
                  <Typography variant="body1">{subDescription}</Typography>
                </Box>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
        <Box m={3}>
          <Typography variant="h5" gutterBottom fontWeight="bold" align="center" mb={3}>
            募集要項
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(requirements).map(([key, value], index) => (
              <Grid item xs={12} md={6} key={index}>
                <Typography variant="body1" fontWeight="bold">
                  {key}
                </Typography>
                <Typography variant="body2">{value}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DetailPage;
