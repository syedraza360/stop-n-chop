import React from 'react'
import NavigationLayout from '../containers/NavigationLayout'
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import WebHeader from '../containers/Header/WebHeader'
import MainHeader from '../containers/Header/MainHeader'
import { UIPolicyTypography } from '../components/UITypography/ui'
import AdjustIcon from '@mui/icons-material/Adjust'

const PrivacyAndPolicy = () => {
  return (
    <NavigationLayout>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} px={2}>
        <MainHeader heading="Privacy Policy" />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: '10px 0px 40px 20px',
            md: '10px 0px 40px 0px',
          },
        }}
      >
        <Box sx={{}}>
          <Grid container sx={{ display: { xs: 'none', md: 'block' } }}>
            <WebHeader heading="Privacy Policy" isDivider={true} />
          </Grid>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Use of Your Personal Data:
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company may use Personal Data for the following purposes:{' '}
            </UIPolicyTypography>
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>To provide and maintain our Service,</b>
                      including to monitor the usage of our Service.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b> To manage Your Account:</b> to manage Your
                      registration as a user of the Service. The Personal Data
                      You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b> For the performance of a contract:</b> the
                      development, compliance and undertaking of the purchase
                      contract for the products, items or services You have
                      purchased or of any other contract with Us through the
                      Service.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>To contact You:</b> To contact You by email, telephone
                      calls, SMS, or other equivalent forms of electronic
                      communication, such as a mobile application's push
                      notifications regarding updates or informative
                      communications related to the functionalities, products or
                      contracted services, including the security updates, when
                      necessary or reasonable for their implementation.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>To provide You</b> with news, special offers and
                      general information about other goods, services and events
                      which we offer that are similar to those that you have
                      already purchased or enquired about unless You have opted
                      not to receive such information
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>To manage Your requests:</b> To attend and manage Your
                      requests to Us.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>For business transfers:</b> We may use Your information
                      to evaluate or conduct a merger, divestiture,
                      restructuring, reorganization, dissolution, or other sale
                      or transfer of some or all of Our assets, whether as a
                      going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Data held by Us
                      about our Service users is among the assets transferred
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>For other purposes:</b> We may use Your information for
                      other purposes, such as data analysis, identifying usage
                      trends, determining the effectiveness of our promotional
                      campaigns and to evaluate and improve our Service,
                      products, services, marketing and your experience
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              User Accounts
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              When You create an account with Us, You must provide Us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of Your account on Our Service.{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You are responsible for safeguarding the password that You use to
              access the Service and for any activities or actions under Your
              password, whether Your password is with Our Service or a
              Third-Party Social Media Service.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You agree not to disclose Your password to any third party. You
              must notify Us immediately upon becoming aware of any breach of
              security or unauthorized use of Your account.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You may not use as a username the name of another person or entity
              or that is not lawfully available for use, a name or trademark
              that is subject to any rights of another person or entity other
              than You without appropriate authorization, or a name that is
              otherwise offensive, vulgar or obscene.
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Personal Data
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:{' '}
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>Email address</UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      First name and last name
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>Phone number</UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Address, State, Province, ZIP/Postal code, City
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={<UIPolicyTypography>Usage Data</UIPolicyTypography>}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px', textDecoration: 'underline' }}
              mt={4}
              fontWeight={600}
            >
              Disclosure of Your Personal Data:
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={2}
              fontWeight={600}
            >
              Legal Requirements{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:{' '}
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Comply with a legal obligation
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service{' '}
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Protect the personal safety of Users of the Service or the
                      public
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Protect against legal liability{' '}
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Law Enforcement
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency){' '}
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Other legal requirements{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Comply with a legal obligation{' '}
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Protect and defend the rights or property of the Company
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Protect the personal safety of Users of the Service or the
                      public{' '}
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Protect against legal liability
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Retention of Your Personal Data
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Security of Your Personal Data
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.{' '}
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Detailed Information on the Processing of Your Personal Data
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              The Service Providers We use may have access to Your Personal
              Data. These third-party vendors collect, store, use, process and
              transfer information about Your activity on Our Service in
              accordance with their Privacy Policies.{' '}
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Email Marketing{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We may use Your Personal Data to contact You with newsletters,
              marketing or promotional materials and other information that may
              be of interest to You. You may opt-out of receiving any, or all,
              of these communications from Us by following the unsubscribe link
              or instructions provided in any email We send or by contacting Us
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Payments{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We may provide paid products and/or services within the Service.
              In that case, we may use third-party services for payment
              processing (e.g. payment processors).
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We will not store or collect Your payment card details. That
              information is provided directly to Our third-party payment
              processors whose use of Your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, Mastercard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Sources of Personal Information
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We obtain the categories of personal information listed above from
              the following categories of sources:
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>Directly from You, </b>
                      For example, from the forms You complete on our Service,
                      preferences You express or provide through our Service, or
                      from Your purchases on our Service
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b>Indirectly from You</b> For example, from observing
                      Your activity on our Service.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      <b> Automatically from You.</b> For example, through
                      cookies We or our Service Providers set on Your Device as
                      You navigate through our Service. ● From Service
                      Providers. For example, third-party vendors to monitor and
                      analyze the use of our Service, third-party vendors for
                      payment processing, or other third-party vendors that We
                      use to provide the Service to You.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Share of Personal Information
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We may share Your personal information identified in the above
              categories with the following categories of third parties:{' '}
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>Service Providers</UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>Payment processors</UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>Our affiliates</UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Our business partners
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      Third party vendors to whom You or Your agents authorize
                      Us to disclose Your personal information in connection
                      with products or services We provide to You
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Share of Personal Information
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We may use or disclose personal information We collect for
              "business purposes” which may include the following examples:{' '}
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      To operate our Service and provide You with our Service.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      To provide You with support and to respond to Your
                      inquiries, including to investigate and address Your
                      concerns and monitor and improve our Service.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      To fulfill or meet the reason You provided the
                      information. For example, if You share Your contact
                      information to ask a question about our Service, We will
                      use that personal information to respond to Your inquiry.
                      If You provide Your personal information to purchase a
                      product or service, We will use that information to
                      process Your payment and facilitate delivery
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      To respond to law enforcement requests and as required by
                      applicable law, court order, or governmental regulations.{' '}
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      As described to You when collecting Your personal
                      information
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      For internal administrative and auditing purposes
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      To detect security incidents and protect against
                      malicious, deceptive, fraudulent or illegal activity,
                      including, when necessary, to prosecute those responsible
                      for such activities.
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} mt={2}>
            <UIPolicyTypography>
              Please note that the examples provided above are illustrative and
              not intended to be exhaustive. For more details on how we use this
              information, please refer to the "Use of Your Personal Data"
              section.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              If We decide to collect additional categories of personal
              information or use the personal information We collected for
              materially different, unrelated, or incompatible purposes We will
              update this Privacy Policy.
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Mobile Devices
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Your mobile device may give You the ability to opt out of the use
              of information about the apps You use in order to serve You ads
              that are targeted to Your interests:{' '}
            </UIPolicyTypography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      "Opt out of Interest-Based Ads" or "Opt out of Ads
                      Personalization" on Android devices
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontSize: '15px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <UIPolicyTypography>
                      "Limit Ad Tracking" on iOS devices
                    </UIPolicyTypography>
                  }
                />
              </ListItem>
            </List>
            <UIPolicyTypography>
              You can also stop the collection of location information from Your
              mobile device by changing the preferences on Your mobile device.
            </UIPolicyTypography>
          </Grid>
          <Grid item xs={12}>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Links to Other Websites
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services
            </UIPolicyTypography>
            <UIPolicyTypography
              sx={{ fontSize: '20px' }}
              mt={4}
              fontWeight={600}
            >
              Changes to this Privacy Policy
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.{' '}
            </UIPolicyTypography>
            <UIPolicyTypography mt={2}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.{' '}
            </UIPolicyTypography>
          </Grid>
        </Grid>
      </Container>
    </NavigationLayout>
  )
}

export default PrivacyAndPolicy
