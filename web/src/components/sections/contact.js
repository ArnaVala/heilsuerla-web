
/** @jsx jsx */
import {jsx, Box, Flex, Grid, Card, Label, Text, Input, Select, Checkbox, Textarea} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'

const Contact = () => {
  return (
    <Section bg='primaryLight'>
      <Wrapper variant='container.wide'>
        <Grid columns={2}>
          <Box>
            <Text color='white' variant='subtitle'>Hafa Samband</Text>
          </Box>
          <Card
            as='form'
            bg='muted'
            aria-label='form'
            onSubmit={e => e.preventDefault()}
            sx={{p: 4,
              label: {color: 'primaryLight'
              },
              input: {mb: 3}}}
          >
            <Label
              htmlFor='input'
            >Fullt Nafn </Label>
            <Input
              aria-label='fullt nafn'
              required='true'
              aria-required='true'
              bg='transparent'
              color='grey'
              placeholder='Fullt nafn'
              name='name'
              sx={{border: 'none', borderRadius: '0px', borderBottom: '1px solid', borderColor: 'primaryLight', '&:focus, &:active': {bg: 'accentMuted', borderColor: 'accent'}}}
            />
            <Label mb={3}> Ég hef áhuga á:</Label>
            <Label> <Checkbox />
              Heilsumarkþjálfun
            </Label>
            <Label>
              <Checkbox />
              Ráðgjöf, fyrirlestrar, vinnustofur
            </Label>
            <Label>
              <Checkbox />
              Bóka heilsuviðtal
            </Label>
            <Label
              htmlFor='input'
              sx={{color: 'muted'}}
            >Netfang</Label>
            <Input
              aria-label='netfang'
              required='true'
              aria-required='true'
              bg='transparent'
              color='grey'
              placeholder='Netfang'
              sx={{borderRadius: '0px', borderBottom: '1px solid', borderColor: 'primaryLight', '&:focus, &:active': {bg: 'accentMuted', borderColor: 'accent'}}}
            />
            <Label htmlFor='textarea'>Skilaboð</Label>
            <Textarea
              name='textarea'
              placeholder='Skrifaðu skilaboð hér'
              rows='6'
              mb={3}
              sx={{border: '1px solid', borderRadius: '0px', borderColor: 'primaryLight'}}
            />

          </Card>
        </Grid>
      </Wrapper>
    </Section>
  )
}
export default Contact
